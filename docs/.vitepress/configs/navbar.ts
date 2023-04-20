import { DefaultTheme } from 'vitepress';

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Consultas',
    link: '/consultas',
  },
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/',
    activeMatch: '/primeros-pasos/'
  },
  {
    text: 'Guías',
    link: '/guias/',
    activeMatch: '/guias/',
  },
  {
    text: 'Quiénes somos',
    link: '/quienes-somos',
  },
]
