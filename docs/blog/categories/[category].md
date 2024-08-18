<script setup>
import { useData } from 'vitepress'

const { params } = useData()
</script>

<PostBreadcrumb />
<Posts :filter="(post) => post.category === params.category" />
