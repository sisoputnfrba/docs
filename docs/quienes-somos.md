<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const data = [
  { name: 'Matias Garcia Isaia', github: 'mgarciaisaia' },
  { name: 'Esteban Masoero', github: 'esigma5' },
  { name: 'Damian Facchini', github: 'iago64' },
  { name: 'Nahuel Mazzeo', github: 'nahuemazzeo' },
  { name: 'Federico Pablos', github: 'fpablos' },
  { name: 'Adriano Filgueira', github: 'afilgueira' },
  { name: 'Nicolas Coen', github: 'ncoen97' },
  { name: 'Luis Cannavó', github: 'luchotc' },
  { name: 'Leandro Carbajales', github: 'LeandroCarbajales' },
  { name: 'Mauro Corvaro', github: 'CMauro96' },
  { name: 'Federico Cardoso', github: 'F-Cardoso' },
  { name: 'Julian Federico Schiffer', github: 'Zheoden' },
  { name: 'Juan Mesaglio', github: 'mesaglio' },
  { name: 'Lucila Melamed', github: 'lumelamed' },
  { name: 'Darío Kozicki', github: 'dariokozicki' },
  { name: 'Federico Medina', github: 'FredeHG' },
  { name: 'Agustin Ranieri', github: 'RaniAgus' },
  { name: 'Marcos Infantino', github: 'MarcosInfantino' },
  { name: 'Sofía Azcoaga', github: 'sazcoaga' },
  { name: 'Irina Pérez Gribnicow', github: 'irinaperezg' },
  { name: 'Tomás Martinez', github: 'tomasmartinez02' },
  { name: 'Florencia Larocca', github: 'LFLarocca' }
];
  
const members = data.map((member) => ({
  avatar: `https://www.github.com/${member.github}.png`,
  name: member.name,
  title: `${member.github}`,
  links: [{ icon: 'github', link: `https://github.com/${member.github}` }]
}))

</script>

# ¿Quiénes somos?

<VPTeamMembers size="small" :members="members" />
