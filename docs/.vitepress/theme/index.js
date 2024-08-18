import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'

import './index.css';

const components = import.meta.glob('./components/*.vue', { eager: true });

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const path in components) {
      const name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
      app.component(name, components[path].default);
    }
    app.config.compilerOptions.isCustomElement = (tag) => ['lite-youtube'].includes(tag);
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
