import MarkdownItFootnotePlugin from 'markdown-it-footnote';
import { defineConfig, HeadConfig } from 'vitepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';
import { socialLinks } from './configs/socialLinks';
import { repository } from '../../package.json';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function script(src: string): HeadConfig {
  if (src.startsWith('https')) {
    return [
      'script', { src, type: 'module' },
    ];
  } else {
    return [
      'script', {},
      readFileSync(resolve(__dirname, src), 'utf-8')
    ]
  }
}

export default defineConfig({
  lang: 'es-AR',
  title: 'Home | Sistemas Operativos - UTN FRBA',
  head: [
    script('https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js'),
    script('scripts/print.js'),
  ],
  description: 'Todo lo necesario para hacer el TP de Sistemas Operativos.',
  lastUpdated: true,
  cleanUrls: true,
  titleTemplate: 'Sistemas Operativos - UTN FRBA',
  themeConfig: {
    logo: '/logo.gif',
    siteTitle: 'Sistemas Operativos',
    nav: navbar,
    sidebar: sidebar,
    outline: 'deep',
    outlineTitle: 'En esta página',
    socialLinks: socialLinks,
    footer: {
      message: `© ${new Date().getFullYear()} Cátedra de Sistemas Operativos`,
      copyright: 'Universidad Tecnológica Nacional | Facultad Regional Buenos Aires',
    },
    editLink: {
      pattern: `${repository}/edit/main/docs/:path`,
      text: 'Editar esta página en GitHub',
    },
    lastUpdatedText: 'Última actualización',
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente',
    },
    darkModeSwitchLabel: 'Tema',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver al inicio',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Buscar',
          },
          modal: {
            displayDetails: 'Mostrar vista detallada',
            resetButtonTitle: 'Limpiar búsqueda',
            backButtonTitle: 'Cerrar buscador',
            noResultsText: 'No se encontraron resultados para',
            footer: {
              selectText: 'para seleccionar',
              navigateText: 'para navegar',
              closeText: 'para cerrar',
            }
          },
        },
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(MarkdownItFootnotePlugin);
    },
  },
  vite: {
    plugins: [],
  },
});
