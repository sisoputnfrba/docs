import { DefaultTheme } from 'vitepress';

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Blog',
    link: 'https://faq.utnso.com.ar/blog'
  },
  {
    text: 'Docs',
    items: [
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
        text: 'Consultas',
        link: '/consultas',
        activeMatch: '/consultas',
      },
      {
        text: '¿Quiénes somos?',
        link: '/quienes-somos',
      },
    ],
  },
  {
    text: 'Inscripciones',
    link: 'https://faq.utnso.com.ar/inscripciones'
  },
]
