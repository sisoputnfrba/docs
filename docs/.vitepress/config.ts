import MarkdownItFootnotePlugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineConfig({
  lang: 'es-AR',
  title: 'SisOp Docs',
  description: 'Todo lo necesario para hacer el TP de Sistemas Operativos.',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: 'SisOp Docs',
    logo: '/logo.gif',
    nav: navbar,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/sisoputnfrba/docs/edit/main/docs/:path',
      text: 'Editar esta página en GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sisoputnfrba/foro' },
      { icon: 'discord', link: 'https://faq.utnso.com.ar/discord' },
      { icon: 'youtube', link: 'https://faq.utnso.com.ar/youtube' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(MarkdownItFootnotePlugin);
    },
  },
});
