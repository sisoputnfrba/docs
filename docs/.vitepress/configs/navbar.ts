import { DefaultTheme } from 'vitepress';

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Blog',
    link: 'https://faq.utnso.com.ar/blog'
  },
  {
    text: 'Guías',
    link: '/guias/',
    activeMatch: '/(primeros-pasos|guias)/',
  },
  {
    text: 'Consultas',
    link: '/consultas',
    activeMatch: '/consultas',
  },
  {
    text: '¿Quiénes somos?',
    link: '/quienes-somos',
  },
  {
    text: 'Inscripciones',
    link: 'https://faq.utnso.com.ar/inscripciones'
  },
]
