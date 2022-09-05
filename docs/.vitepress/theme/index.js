import DefaultTheme from 'vitepress/theme';
import YouTube from '../components/YouTube.vue';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    //DefaultTheme.enhanceApp(ctx);
    ctx.app.component('YouTube', YouTube);
  },
}
