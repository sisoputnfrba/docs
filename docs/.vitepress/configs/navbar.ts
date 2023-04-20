import { DefaultTheme } from 'vitepress';

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Blog',
    link: 'https://faq.utnso.com.ar/blog'
  },
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
    text: 'Inscripciones',
    link: 'https://faq.utnso.com.ar/inscripciones'
  },
  {
    text: 'Quiénes somos',
    link: '/quienes-somos',
  },
]
