<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import data from './members.json'

const members = data.map((member) => ({
  avatar: `https://www.github.com/${member.github}.png`,
  name: member.name,
  title: `${member.github}`,
  links: [{ icon: 'github', link: `https://github.com/${member.github}` }]
}));

</script>

# ¿Quiénes somos?

<VPTeamMembers size="small" :members="members" />
