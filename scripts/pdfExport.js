const puppeteer = require('puppeteer');
const fs = require('fs');

const { BASE_URL, BASE_DEST } = require('./helpers/environment');

const fixAnchorElements = require('./helpers/fixAnchorElements');
const openAllDetailsElements = require('./helpers/openAllDetailsElements');

/**
 * Obtiene la ruta en donde guardar el PDF.
 * @param {string} path
 * @returns {string} - Ruta relativa de la página a exportar.
 */
 const getDestinationFolder = (path) => {
  return BASE_DEST + '/'
    + path.split('/').slice(0, -1).join('/');
}


/**
 * Crea un PDF para la página indicada por parámetro.
 * @param {string} path - Ruta relativa de la página a exportar.
 */
const exportPDF = async (path) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/${path}`, { waitUntil: 'networkidle2' });

  await fixAnchorElements(page);
  await openAllDetailsElements(page);

  if (!fs.existsSync(getDestinationFolder(path))) {
    fs.mkdirSync(getDestinationFolder(path), { recursive: true });
  }

  const pdf = await page.pdf({
    path: `${BASE_DEST}/${path}.pdf`,
    format: 'A4',
    printBackground: false,
    margin: {
      top: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
      right: '2.54cm',
    },
    scale: 0.70,
  });

  await browser.close();

  return pdf;
};

exportPDF(process.argv[2]);
