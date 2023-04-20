import { DefaultTheme } from 'vitepress';

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'Blog',
    link: 'https://faq.utnso.com.ar/blog'
  },
  {
    text: 'Guías',
    link: '/guias/',
    activeMatch: '/(guias|primeros-pasos)/',
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
