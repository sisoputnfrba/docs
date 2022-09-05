export interface SidebarGroup {
  text?: string
  items: SidebarItem[]
  collapsible?: boolean

  collapsed?: boolean
}

export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] }

export const sidebar: SidebarGroup[] = [
  {
    text: 'Primeros pasos',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'Video de Introducción al TP',
        link: '/primeros-pasos/'
      },
      {
        text: '¿Dónde me anoto?',
        link: '/primeros-pasos/donde-me-anoto'
      },
      {
        text: 'Normas del Trabajo Práctico',
        link: '/primeros-pasos/normas-tp'
      },
      {
        text: 'Conseguir un entorno Linux',
        link: '/primeros-pasos/entorno-linux'
      },
      {
        text: 'Introducción al Lenguaje C',
        link: '/primeros-pasos/lenguaje-c'
      },
      {
        text: 'Preparar el entorno para codear',
        link: '/primeros-pasos/entorno-desarrollo'
      },
      {
        text: 'Trabajo Práctico 0',
        link: '/primeros-pasos/tp0'
      },
    ],
  },
  {
    text: 'Consola de Linux y Git',
    collapsible: true,
    collapsed: true,
    items: [
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
    ],
  },
  {
    text: 'Programación en C',
    collapsible: true,
    collapsed: true,
    items: [
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
    collapsible: true,
    collapsed: true,
    items: [
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
    collapsible: true,
    collapsed: true,
    items: [
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
    ],
  },
  {
    text: 'Recursos',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Máquinas virtuales',
        link: '/recursos/vms',
      },
      {
        text: 'TPs Anteriores',
        link: '/recursos/tps-anteriores',
      },
    ]
  }
]
