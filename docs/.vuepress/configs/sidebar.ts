import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = [
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/intro',
    collapsible: true,
    children: [
      '/primeros-pasos/intro',
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
      '/guias/programacion/cspec',
    ],
  },
  {
    text: 'Uso de syscalls de Linux',
    collapsible: true,
    children: [
      '/guias/linux/sockets',
      '/guias/linux/serializacion',
      '/guias/linux/threads',
      {
        text: 'Presentación de Señales',
        link: 'https://faq.utnso.com.ar/seniales',
      },
    ],
  },
  {
    text: 'Herramientas útiles',
    collapsible: true,
    children: [
      '/guias/herramientas/debugger',
      '/guias/herramientas/valgrind',
      '/guias/herramientas/deploy'
    ],
  },
]
