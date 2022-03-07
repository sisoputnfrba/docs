import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = [
  {
    text: 'Primeros pasos',
    link: '/primeros-pasos/intro',
    collapsible: true,
    children: [
      '/primeros-pasos/intro',
      '/primeros-pasos/campus-virtual',
      '/primeros-pasos/github',
      '/primeros-pasos/sistema-inscripciones',
      '/primeros-pasos/discord',
      '/primeros-pasos/normas-tp',
      '/primeros-pasos/entorno-linux',
      '/primeros-pasos/conseguir-grupo',
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
