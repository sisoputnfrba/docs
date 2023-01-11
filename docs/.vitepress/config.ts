import MarkdownItFootnotePlugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';
import { socialLinks } from './configs/socialLinks';

export default defineConfig({
  lang: 'es-AR',
  title: 'SisOp Docs',
  description: 'Todo lo necesario para hacer el TP de Sistemas Operativos.',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: 'SisOp Docs',
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
      message: '© 2023 SisOp Docs',
      copyright: 'Made by sisoputnfrba with ❤️',
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
