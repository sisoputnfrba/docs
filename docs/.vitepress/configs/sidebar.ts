import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Recursos',
    items: [
      {
        text: 'Máquinas virtuales',
        link: '/recursos/vms',
      },
      {
        text: 'Commons Library',
        link: 'https://faq.utnso.com.ar/commons'
      },
      {
        text: 'Linux man pages',
        link: 'https://man7.org/linux/man-pages/'
      },
      {
        text: 'Enunciado del TP',
        link: 'https://faq.utnso.com.ar/enunciado'
      },
      {
        text: 'Documento de Pruebas',
        link: 'https://faq.utnso.com.ar/pruebas',
      },
      {
        text: 'TPs Anteriores',
        link: '/recursos/tps-anteriores',
      },
    ]
  },
  {
    text: 'Primeros pasos',
    collapsed: true,
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
        text: 'Crear tu primer proyecto C',
        link: '/primeros-pasos/primer-proyecto-c'
      },
      {
        text: 'Git para el Trabajo Práctico',
        link: '/primeros-pasos/git'
      },
      {
        text: 'Trabajo Práctico 0',
        link: '/primeros-pasos/tp0'
      },
    ],
  },
  {
    text: 'Consola de Linux y Git',
    collapsed: true,
    items: [
      {
        text: 'Guía de uso de Bash',
        link: '/guias/consola/bash'
      },
      {
        text: 'Rutas Relativas y Absolutas',
        link: '/guias/consola/rutas'
      },
      {
        text: 'Mario Bash',
        link: 'https://faq.utnso.com.ar/mariobash'
      },
      {
        text: 'Learn Git Branching',
        link: 'https://learngitbranching.js.org/?locale=es_AR'
      },
    ],
  },
  {
    text: 'Programación en C',
    collapsed: true,
    items: [
      {
        text: 'Repaso de Arquitectura',
        link: 'https://faq.utnso.com.ar/guia-repaso-arquitectura'
      },
      {
        text: 'Manejo de Punteros y Memoria Dinámica',
        link: '/guias/programacion/punteros',
      },
      {
        text: 'Buenas Prácticas de C',
        link: '/guias/programacion/buenas-practicas'
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
        text: 'Tutorial interactivo de C',
        link: 'https://www.learn-c.org/'
      },
    ],
  },
  {
    text: 'Syscalls de Linux',
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
]
