const { Page, ElementHandle } = require('puppeteer');
const { BASE_URL } = require('./environment');

/**
 * Corrige los links que apuntan hacia la misma página, para que apunten a la
 * versión en prod.
 * @param {Page} page
 * */
 const fixAnchorElements = async (page) => {
  return getAllAnchorElements(page)
    .then(links => Promise.all(links.map(getHref)))
    .then(hrefs => Promise.all(hrefs.filter(isLocal)))
    .then(hrefs => Promise.all(hrefs.map(replaceLink)));
}

/**
 * Obtiene todos los links de la página.
 * @param {Page} page - Página a analizar.
 * @returns {Promise<ElementHandle<HTMLAnchorElement>[]>} - Array de links.
 */
const getAllAnchorElements = async (page) => {
  return page.$$('a');
}

/**
 * Obtiene el atributo href de un link.
 * @param {ElementHandle<HTMLAnchorElement>} link
 * @returns {Promise<{ link: ElementHandle<HTMLAnchorElement>, href: string }>}
 */
 const getHref = async (link) => {
  return link.getProperty('href')
    .then(handle => handle.jsonValue())
    .then(href => ({ link, href }));
}

/**
 * Devuelve true si el link apunta a una página local.
 * @param {{ link: ElementHandle<HTMLAnchorElement>, href: string }} href
 * @returns {boolean}
 */
const isLocal = ({ href }) => href.startsWith(BASE_URL);

/**
 * Reemplaza el link de la página por el link de producción.
 * @param {{ link: ElementHandle<HTMLAnchorElement>, href: string }} href
 * @returns {Promise<void>} - Promise que se resuelve cuando se ha reemplazado el link.
 */
const replaceLink = async ({ link, href }) => {
  const newHref = href.replace(BASE_URL, 'https://docs.utnso.com.ar');
  await link.evaluate((node, newHref) => node.href = newHref, newHref);
}

module.exports = fixAnchorElements;
