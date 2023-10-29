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
      {
        text: '¿Quiénes somos?',
        link: '/quienes-somos',
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
        text: '¿Qué es Golang?',
        link: '/primeros-pasos/lenguaje-golang'
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
        text: 'Git para el Trabajo Práctico',
        link: '/guias/consola/git'
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
    text: 'Golang',
    collapsed: true,
    items: [
      {
        text: 'Introducción',
        link: '/guias/programacion/introduction',
      },
      {
        text: 'Variables y Funciones',
        link: '/guias/programacion/variables-functions'
      },
      {
        text: 'Sentencias',
        link: '/guias/programacion/sentences'
      },
      {
        text: 'Rutinas o ¿Hilos?',
        link: '/guias/programacion/threads'
      },
      {
        text: 'Sincronización - sem y mutex',
        link: '/guias/programacion/synchronization'
      },
      {
        text: 'Imperativo vs Objectos',
        link: '/guias/programacion/objects'
      },
      {
        text: 'Bibliotecas - func compartidas',
        link: '/guias/programacion/libraries'
      },
      {
        text: 'Protocolo HTTP - GIN',
        link: '/guias/programacion/http-protocol'
      },
      {
        text: 'Manejo de archivos',
        link: '/guias/programacion/file-management'
      },
      {
        text: 'Logging',
        link: '/guias/programacion/logging'
      }
    ],
  },
  {
    text: 'Herramientas útiles',
    collapsed: true,
    items: [
      {
        text: 'Estructura de proyecto',
        link: '/guias/herramientas/projects'
      },
      {
        text: '¿Qué es un Socket?',
        link: '/guias/herramientas/sockets'
      },
      {
        text: 'FUSE',
        link: '/guias/herramientas/fuse'
      }
    ],
  },
]
