
<script setup>
import { useData } from 'vitepress'

const { params } = useData()
</script>

<PostBreadcrumb :category="params.category" />

<Posts :filter="(post) => post.category === params.category" />
