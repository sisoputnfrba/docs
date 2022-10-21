import DefaultTheme from 'vitepress/theme';
import CodeGroup from './components/CodeGroup.ts';
import CodeGroupItem from './components/CodeGroupItem.vue';
import YouTube from './components/YouTube.vue';

import './styles/custom.scss';
import './styles/code-group.scss';
import './styles/print.scss';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    //DefaultTheme.enhanceApp(ctx);
    ctx.app.component('CodeGroup', CodeGroup);
    ctx.app.component('CodeGroupItem', CodeGroupItem);
    ctx.app.component('YouTube', YouTube);
  },
}
