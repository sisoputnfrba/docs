const { Page, ElementHandle } = require('puppeteer');

/**
 * Abre todos los details de la página para que aparezcan en el PDF.
 * @param {Page} page - Página a analizar.
 * @returns {Promise<void>} - Promise que se resuelve cuando se han abierto todos los details.
 */
 const openAllDetailsElements = async (page) => {
  const details = await page.$$('summary')
    .then(details => details.map(clickDetail));
  await Promise.all(details);
}

/**
 * Hace click en el dropdown para que aparezca en la página.
 * @param {ElementHandle<HTMLElement>} detail
 */
const clickDetail = async (detail) => {
  await detail.evaluate(node => node.click());
}

module.exports = openAllDetailsElements;
