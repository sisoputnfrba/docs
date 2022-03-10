import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/',
  },
  {
    text: 'Tengo una duda',
    link: '/dudas',
  },
  {
    text: 'Guías',
    link: '/guias/',
    children: [
      {
        text: 'Manejo de la consola y Git',
        link: '/guias/consola',
        children: [
          {
            text: 'Comandos básicos de Linux',
            link: '/guias/consola/comandos-basicos'
          },
          {
            text: 'Control de versionado con Git',
            link: '/guias/consola/git'
          },
        ]
      },
      {
        text: 'Guías de Programación en C',
        link: '/guias/programacion/',
        children: [
          {
            text: 'Manejo de Punteros y Memoria Dinámica',
            link: '/guias/programacion/punteros'
          },
          {
            text: 'Cómo hacer una consola interactiva',
            link: '/guias/programacion/readline'
          },
          {
            text: 'Buenas Prácticas de C',
            link: '/guias/programacion/buenas-practicas'
          },
          // {
          //   text: 'Algo sobre las commons',
          //   link: '/guias/programacion/commons'
          // }
          {
            text: 'Unit Testing con CSpec',
            link: '/guias/herramientas/cspec'
          },
          {
            text: 'Unit Testing con CUnit',
            link: '/guias/herramientas/cunit'
          },
        ],
      },
      {
        text: 'API de Linux',
        link: '/guias/linux/',
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
            text: 'Charla de Threads',
            link: '/guias/linux/threads',
          },
          // {
          //   text: 'Señales',
          //   link: '/guias/linux/seniales'
          // }
        ],
      },
      {
        text: 'Herramientas',
        link: '/guias/herramientas/',
        children: [
          {
            text: 'Debugging en Eclipse',
            link: '/guias/herramientas/debugger'
          },
          {
            text: 'Tutorial de Valgrind y Helgrind',
            link: '/guias/herramientas/valgrind'
          },
          {
            text: 'Armando scripts de Bash',
            link: '/guias/herramientas/bash'
          },
        ]
      },
    ]
  },
  {
    text: 'Inscripciones',
    link: 'https://inscripciones.utnso.com.ar/'
  }
]
