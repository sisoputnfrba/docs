---
lastUpdated: false
editLink: false
---

<script setup>
import { useData } from 'vitepress'

const { params } = useData()
</script>

<PostBreadcrumb />
<PostsPaginated :filter="(post) => post.category === params.category" />
