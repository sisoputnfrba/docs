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
  cleanUrls: 'without-subfolders',
  titleTemplate: 'Sistemas Operativos - UTN FRBA',
  themeConfig: {
    siteTitle: 'Sistemas Operativos',
    logo: '/logo.gif',
    outline: 'deep',
    outlineTitle: 'En esta página',
    lastUpdatedText: 'Última actualización',
    nav: navbar,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/sisoputnfrba/docs/edit/main/docs/:path',
      text: 'Editar esta página en GitHub',
    },
    socialLinks: socialLinks,
    footer: {
      message: `© ${new Date().getFullYear()} Cátedra de Sistemas Operativos`,
      copyright: 'Universidad Tecnológica Nacional | Facultad Regional Buenos Aires',
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente',
    },
  },
  markdown: {
    config: (md) => {
      md.use(MarkdownItFootnotePlugin);
    },
  },
});
