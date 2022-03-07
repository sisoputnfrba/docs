import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/',
  },
  {
    text: 'Guías',
    link: '/guias/',
    children: [

    ]
  },
  {
    text: 'Foro de GitHub',
    link: 'https://github.com/sisoputnfrba/foro#readme'
  },
  {
    text: 'Inscripciones',
    link: 'https://inscripciones.utnso.com.ar/'
  }
]
