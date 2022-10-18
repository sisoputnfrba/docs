import { defineUserConfig } from '@condorhero/vuepress-plugin-export-pdf-v2';

export default defineUserConfig({
  routePatterns: [
    "!/**",
    "docs/consultas.html"
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
  outFile: 'docs/consultas.pdf',
});
