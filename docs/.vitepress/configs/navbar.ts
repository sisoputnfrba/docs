export type NavItem =
  { text: string; link: string; activeMatch?: string } |
  { text: string; items: NavItem[]; };

export const navbar: NavItem[] = [
  {
    text: 'Blog',
    link: 'https://faq.utnso.com.ar/blog'
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
    text: 'Consultas',
    link: '/consultas',
  },
  {
    text: 'Quiénes somos',
    link: '/quienes-somos',
  },
]
