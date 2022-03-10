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
      '/primeros-pasos/entorno-desarrollo',
      '/primeros-pasos/consola',
      '/primeros-pasos/tp0',
    ]
  },
  {
    text: 'Guías',
    link: '/guias/',
    collapsible: true,
    children: [

    ]
  }
]
