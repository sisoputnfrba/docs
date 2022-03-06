import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { name, description, repository } from '../../package.json';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig<DefaultThemeOptions>({
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#title
   */
  title: name,
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
    logo: 'https://vuejs.org/images/logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: navbar,
    sidebar: sidebar,
  },

  /**
   * Apply plugins，ref：https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html#install
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    [
      '@vuepress/plugin-palette',
      { preset: 'sass' }
    ],
  ]
});
