<script setup>
import { sidebar } from '../.vitepress/configs/sidebar.ts'
import Link from '../.vitepress/theme/components/Link.vue'
</script>

# Guías

::: tip

También podés navegar entre las distintas guías a través del menú lateral de la
página.

:::

<span v-for="group in sidebar.slice(2)">
<h3 :id="group.text.toLowerCase().replace(' ', '-')">
  {{ group.text }}
  <a class="header-anchor" :href="'#' + group.text.toLowerCase().replace(' ', '-')"></a>
</h3>
<ul>
  <li v-for="item in group.items">
    <Link :href="item.link" :text="item.text "/>
  </li>
</ul>
</span>
