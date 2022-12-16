import DefaultTheme from 'vitepress/theme';
import YouTube from './components/YouTube.vue';

import './styles/custom.scss';
import './styles/print.scss';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    //DefaultTheme.enhanceApp(ctx);
    ctx.app.component('YouTube', YouTube);
  },
}
