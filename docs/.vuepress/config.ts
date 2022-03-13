import path from 'path';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { description } from '../../package.json';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig<DefaultThemeOptions>({
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#title
   */
  title: 'UTN.SO Guides',
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#description
   */
  description: description,

  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#base
   */
  base: '/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v2.vuepress.vuejs.org/reference/default-theme/config.html
   */
  themeConfig: {
    logo: '/img/logo.gif',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: navbar,
    sidebar: sidebar,
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
