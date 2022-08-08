import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: 'Consultas',
    link: '/consultas',
  },
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/',
  },
  {
    text: 'Guías',
    children: [
      {
        text: 'Consola de Linux y Git',
        children: [
          {
            text: 'Guía de uso de Bash',
            link: '/guias/consola/bash'
          },
          {
            text: 'Git para el Trabajo Práctico',
            link: '/guias/consola/git'
          },
          {
            text: 'Rutas Relativas y Absolutas',
            link: '/guias/consola/rutas'
          },
        ]
      },
      {
        text: 'Programación en C',
        children: [
          {
            text: 'Manejo de Punteros y Memoria Dinámica',
            link: '/guias/programacion/punteros'
          },
          {
            text: 'Argumentos para el main',
            link: '/guias/programacion/main'
          },
          {
            text: 'Cómo hacer una consola interactiva',
            link: '/guias/programacion/readline'
          },
          {
            text: 'Buenas Prácticas de C',
            link: '/guias/programacion/buenas-practicas'
          },
          {
            text: 'Video de Shared Libraries',
            link: '/guias/programacion/shared-libraries'
          },
        ],
      },
      {
        text: 'Uso de syscalls de Linux',
        children: [
          {
            text: 'Guía de Sockets',
            link: '/guias/linux/sockets',
          },
          {
            text: 'Guía de Serialización',
            link: '/guias/linux/serializacion',
          },
          {
            text: 'Charla de Threads y Sincronización',
            link: '/guias/linux/threads',
          },
          {
            text: 'Presentación de Señales',
            link: 'https://faq.utnso.com.ar/seniales'
          },
        ],
      },
      {
        text: 'Herramientas útiles',
        children: [
          {
            text: 'Máquinas virtuales',
            link: '/guias/herramientas/vms',
          },
          {
            text: 'Debugging en Eclipse',
            link: '/guias/herramientas/debugger'
          },
          {
            text: 'Tutorial de Valgrind y Helgrind',
            link: '/guias/herramientas/valgrind'
          },
          {
            text: 'Unit Testing con CSpec',
            link: '/guias/herramientas/cspec'
          },
          {
            text: 'Guía de despliegue de TP',
            link: '/guias/herramientas/deploy'
          },
        ]
      },
    ]
  },
  {
    text: 'Links',
    children: [
      {
        text: 'Links',
        children: [
          {
            text: 'Blog de la cátedra',
            link: 'https://faq.utnso.com.ar/blog'
          },
          {
            text: 'Foro de consultas',
            link: 'https://faq.utnso.com.ar/foro'
          },
          {
            text: 'Sistema de Inscripciones',
            link: 'https://faq.utnso.com.ar/inscripciones'
          },
          {
            text: 'Enunciado',
            link: 'https://faq.utnso.com.ar/enunciado'
          },
          {
            text: 'Commons Library',
            link: 'https://faq.utnso.com.ar/commons'
          },
          {
            text: 'Mario Bash',
            link: 'https://faq.utnso.com.ar/mariobash'
          },
        ]
      }
    ],
  }
]
