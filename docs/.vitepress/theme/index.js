import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import Image from './components/Image.vue';
import Link from './components/Link.vue';
import PostBreadcrumb from './components/PostBreadcrumb.vue';
import PostCard from './components/PostCard.vue';
import Posts from './components/Posts.vue';
import PostsPaginated from './components/PostsPaginated.vue';
import QuienesSomos from './components/QuienesSomos.vue';
import Sheet from './components/Sheet.vue';
import YouTube from './components/YouTube.vue';

import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    //DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Image', Image);
    ctx.app.component('Link', Link);
    ctx.app.component('PostBreadcrumb', PostBreadcrumb);
    ctx.app.component('PostCard', PostCard);
    ctx.app.component('Posts', Posts);
    ctx.app.component('PostsPaginated', PostsPaginated);
    ctx.app.component('QuienesSomos', QuienesSomos);
    ctx.app.component('Sheet', Sheet);
    ctx.app.component('YouTube', YouTube);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
}
