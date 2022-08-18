import path from 'path';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { description } from '../../package.json';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig<DefaultThemeOptions>({
  /**
   * Title for the site.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#title
   */
  title: 'UTN.SO Guides',

  /**
   * Description for the site.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#description
   */
  description: description,

  /**
   * The base URL the site will be deployed at.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#base
   */
  base: '/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'icon', href: '/img/logo.gif' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/default-theme/config.html
   */
  themeConfig: {
    home: '/',
    navbar: navbar,
    logo: '/img/logo.gif',
    sidebar: sidebar,
    editLink: true,
    editLinkText: 'Editar desde GitHub',
    docsDir: 'docs',
    docsRepo: 'https://github.com/sisoputnfrba/docs',
    docsBranch: 'main',
    lastUpdated: true,
    lastUpdatedText: 'Última actualización',
    contributors: false,
    warning: 'IMPORTANTE',
    danger: 'ATENCIÓN',
  },

  /**
   * Configure VuePress built-in Markdown syntax extensions.
   *
   * ref: https://v2.vuepress.vuejs.org/reference/config.html#markdown
   */
   markdown: {
    importCode: {
      handleImportPath: (str) => {
        return str.replace(/^@snippets/, path.resolve(__dirname, 'snippets'));
      }
    }
  },

  /**
   * Markdown enhancement.
   *
   * ref: https://v2.vuepress.vuejs.org/reference/plugin-api.html#extendsmarkdown
   */
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-footnote'));
  },

  /**
   * Apply plugins.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html#install
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    [
      '@vuepress/plugin-palette',
      { preset: 'sass' }
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          YouTube: path.resolve(__dirname, './components/YouTube.vue'),
        },
      },
    ],
  ]
});
