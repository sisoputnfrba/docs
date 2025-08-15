---
lastUpdated: false
editLink: false
---

<script setup>
import { useData } from 'vitepress'

const { params } = useData()
</script>

<PostBreadcrumb />
<PostsPaginated :page="Number(params.page)"/>
