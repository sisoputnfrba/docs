import DefaultTheme from 'vitepress/theme';
import Image from './components/Image.vue';
import Link from './components/Link.vue';
import YouTube from './components/YouTube.vue';

import './styles/custom.scss';
import './styles/print.scss';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    //DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Image', Image);
    ctx.app.component('Link', Link);
    ctx.app.component('YouTube', YouTube);
  },
}
