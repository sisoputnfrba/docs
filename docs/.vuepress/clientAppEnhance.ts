import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ router }) => {
  router.addRoute({
    path: '/primeros-pasos/',
    redirect: '/primeros-pasos/intro'
  });
});
