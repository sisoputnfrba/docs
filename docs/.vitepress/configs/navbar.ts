export type NavItem =
  { text: string; link: string; } |
  { text: string; items: NavItem[]; };

export const navbar: NavItem[] = [
  {
    text: 'Primeros pasos',
    items: [
      {
        text: 'Primeros pasos',
        items: [
          {
            text: 'Video de Introducción al TP',
            link: '/primeros-pasos/intro'
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
            text: 'Preparar el entorno para desarrollar',
            link: '/primeros-pasos/entorno-desarrollo'
          },
          {
            text: 'Trabajo Práctico 0',
            link: '/primeros-pasos/tp0'
          },
        ],
      },
    ],
  },
  {
    text: 'Guías',
    items: [
      {
        text: 'Consola de Linux y Git',
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
        ]
      },
      {
        text: 'Programación en C',
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
        ]
      },
    ]
  },
  {
    text: 'Recursos',
    items: [
      {
        text: 'Recursos',
        items: [
          {
            text: 'Máquinas virtuales',
            link: '/recursos/vms',
          },
          {
            text: 'Enunciado del TP',
            link: 'https://faq.utnso.com.ar/enunciado'
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
            text: 'TPs Anteriores',
            link: '/recursos/tps-anteriores',
          },
        ],
      },
      {
        text: 'Tutoriales',
        items: [
          {
            text: 'Micro-repaso de Arquitectura',
            link: 'https://faq.utnso.com.ar/guia-repaso-arquitectura'
          },
          {
            text: 'Mario Bash',
            link: 'https://faq.utnso.com.ar/mariobash'
          },
          {
            text: 'Tutorial interactivo de C',
            link: 'https://www.learn-c.org/'
          },
          {
            text: 'Learn Git Branching',
            link: 'https://learngitbranching.js.org/'
          },
        ]
      },
    ],
  },
  {
    text: 'Contacto',
    items: [
      {
        text: 'Consultas',
        items: [
          {
            text: 'Help! I need somebody!',
            link: '/consultas'
          },
        ],
      },
      {
        text: 'Links útiles',
        items: [
          {
            text: 'Blog de la cátedra',
            link: 'https://faq.utnso.com.ar/blog'
          },
          {
            text: 'Foro de consultas',
            link: 'https://faq.utnso.com.ar/foro'
          },
          {
            text: 'Sistema de Inscripciones',
            link: 'https://faq.utnso.com.ar/inscripciones'
          },
          {
            text: 'Campus Virtual',
            link: 'https://faq.utnso.com.ar/cv'
          },
          {
            text: 'Canal de YouTube',
            link: 'https://faq.utnso.com.ar/youtube'
          },
        ]
      },
    ]
  },
]
