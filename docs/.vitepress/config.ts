import MarkdownItFootnotePlugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';
import { socialLinks } from './configs/socialLinks';

export default defineConfig({
  lang: 'es-AR',
  title: 'Docs | Sistemas Operativos - UTN FRBA',
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
      pattern: 'https://github.com/sisoputnfrba/docs/edit/main/docs/:path',
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
