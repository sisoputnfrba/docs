import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = [
  {
    text: 'Primeros pasos',
    collapsible: false,
    children: [
      '/primeros-pasos/',
      '/primeros-pasos/donde-me-anoto',
      '/primeros-pasos/normas-tp',
      '/primeros-pasos/entorno-linux',
      '/primeros-pasos/lenguaje-c',
      '/primeros-pasos/entorno-desarrollo',
      '/primeros-pasos/tp0',
    ],
  },
  {
    text: 'Consola de Linux y Git',
    collapsible: true,
    children: [
      '/guias/consola/bash',
      '/guias/consola/git',
      '/guias/consola/rutas',
    ],
  },
  {
    text: 'Programación en C',
    collapsible: true,
    children: [
      '/guias/programacion/punteros',
      '/guias/programacion/main',
      '/guias/programacion/readline',
      '/guias/programacion/buenas-practicas',
      '/guias/programacion/shared-libraries',
    ],
  },
  {
    text: 'Uso de syscalls de Linux',
    collapsible: true,
    children: [
      '/guias/linux/sockets',
      '/guias/linux/serializacion',
      '/guias/linux/threads',
    ],
  },
  {
    text: 'Herramientas útiles',
    collapsible: true,
    children: [
      '/guias/herramientas/debugger',
      '/guias/herramientas/valgrind',
      '/guias/herramientas/cspec',
      '/guias/herramientas/deploy',
    ],
  },
  {
    text: 'Recursos',
    collapsible: true,
    children: [
      '/recursos/vms',
      '/recursos/tps-anteriores',
    ]
  }
]
