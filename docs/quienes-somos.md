<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  { name: 'Damian Facchini', github: 'iago64' },
  { name: 'Nahuel Mazzeo', github: 'nahuemazzeo' },
  { name: 'Leandro Carbajales', github: 'LeandroCarbajales' },
  { name: 'Mauro Corvaro', github: 'CMauro96' },
  { name: 'Gaston Castiñeira', github: 'gastoncastineira' },
  { name: 'Julian Schiffer', github: 'Zheoden' },
  { name: 'Nicolas Coen', github: 'ncoen97' },
  { name: 'Karen Manrique', github: 'karengrams' },
  { name: 'Juan Mesaglio', github: 'mesaglio' },
  { name: 'Agustin Ranieri', github: 'RaniAgus' },
  { name: 'Ignacio Baptista', github: 'nachiten' },
  { name: 'Sofia Azcoaga', github: 'sazcoaga' },
  { name: 'Brian Rosenbolt', github: 'brianross30' },
  { name: 'Dario Kozicki', github: 'dariokozicki' },
  { name: 'Federico Medina', github: 'FredeHG' },
  { name: 'Matias Rosbaco', github: 'MatiasRosbaco' },
].map((member) => ({
  avatar: `https://www.github.com/${member.github}.png`,
  name: member.name,
  title: `${member.github}`,
  links: [{ icon: 'github', link: `https://github.com/${member.github}` }]
}))

</script>

# ¿Quiénes somos?

<VPTeamMembers size="small" :members="members" />
