<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { data } from '../loaders/members.data.js'

const members = data.map((member) => ({
  avatar: `https://www.github.com/${member.github}.png`,
  name: member.name,
  title: `${member.github}`,
  links: [{ icon: 'github', link: `https://github.com/${member.github}` }]
}));

</script>

<template>
  <VPTeamMembers size="small" :members="members" />
</template>
