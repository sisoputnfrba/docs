import MarkdownItFootnotePlugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { navbar } from './theme/navbar';
import { sidebar } from './theme/sidebar';

export default defineConfig({
  lang: 'es-AR',
  title: 'VitePress',
  description: 'Just playing around.',
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
