import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  '/primeros-pasos/': [
    {
      text: 'Primeros pasos',
      link: '/primeros-pasos/intro',
      collapsible: true,
      children: [
        '/primeros-pasos/intro',
        '/primeros-pasos/donde-me-anoto',
        '/primeros-pasos/normas-tp',
        '/primeros-pasos/entorno-linux',
        '/primeros-pasos/consola',
        '/primeros-pasos/lenguaje-c',
        '/primeros-pasos/entorno-desarrollo',
        '/primeros-pasos/tp0',
      ],
    },
  ],
  '/guias/': [
    {
      text: 'Consola de Linux y Git',
      collapsible: true,
      children: [
        '/guias/consola/linux',
        '/guias/consola/git',
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
        // '/guias/programacion/commons',
        // '/guias/programacion/libraries',
        '/guias/programacion/cspec',
        '/guias/programacion/cunit',
      ],
    },
    {
      text: 'TBD',
      collapsible: true,
      children: [
        '/guias/linux/sockets',
        '/guias/linux/serializacion',
        '/guias/linux/threads',
        // '/guias/linux/seniales',
      ],
    },
    {
      text: 'Herramientas',
      collapsible: true,
      children: [
        '/guias/herramientas/debugger',
        '/guias/herramientas/valgrind',
        // '/guias/herramientas/bash',
        // '/guias/herramientas/ssh',
      ],
    },
  ],
}
