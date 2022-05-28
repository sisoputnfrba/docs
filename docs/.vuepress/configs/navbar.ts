import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/',
  },
  {
    text: 'Consultas',
    link: '/consultas',
  },
  {
    text: 'Guías',
    children: [
      {
        text: 'Consola de Linux y Git',
        children: [
          {
            text: 'Introducción a la Shell de Linux',
            link: '/guias/consola/linux'
          },
          {
            text: 'Control de versionado con Git',
            link: '/guias/consola/git'
          },
          {
            text: 'Rutas relativas vs absolutas',
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
            text: 'Unit Testing con CSpec',
            link: '/guias/programacion/cspec'
          }
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
            text: 'PowerPoint de Señales',
            link: 'https://faq.utnso.com.ar/seniales'
          }
        ],
      },
      {
        text: 'Herramientas útiles',
        children: [
          {
            text: 'Debugging en Eclipse',
            link: '/guias/herramientas/debugger'
          },
          {
            text: 'Tutorial de Valgrind y Helgrind',
            link: '/guias/herramientas/valgrind'
          },
          // {
          //   text: 'Automatizando tareas en Bash',
          //   link: '/guias/herramientas/bash'
          // },
          // {
          //   text: 'Trabajando en Remoto con SSH',
          //   link: '/guias/herramientas/ssh',
          // }
        ]
      },
    ]
  },
  {
    text: 'Inscripciones',
    link: 'https://inscripciones.utnso.com.ar/'
  }
]
