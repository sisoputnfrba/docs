import { defineUserConfig } from '@condorhero/vuepress-plugin-export-pdf-v2';

export default defineUserConfig({
  routePatterns: [
    "!/**",
    "/guias/**",
    "/primeros-pasos/**",
    "!/primeros-pasos/",
    "!/primeros-pasos/donde-me-anoto.html",
    "!/primeros-pasos/entorno-desarrollo.html",
    "!/primeros-pasos/entorno-linux.html",
  ],
  pdfOptions: {
    format: 'A4',
    scale: 0.8,
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm',
    }
  },
  outFile: 'docs.pdf',
});