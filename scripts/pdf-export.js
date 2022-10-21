const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'http://localhost:5173';
const DESTINATION = 'docs/public/pdf'

const exportPDF = async (path) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/${path}`, { waitUntil: 'networkidle2' });
  await changeHrefs(page);
  createDir(`${DESTINATION}/${path.split('/').slice(0, -1).join('/')}`);
  const pdf = await printPDF(page, `${DESTINATION}/${path}.pdf`);
  await browser.close();

  return pdf;
};

const printPDF = async (page, outputFile) => {
  await page.pdf({
    path: outputFile,
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
}

const getAllLocalLinks = async (page) => {
  return page.$$('a').then(filterLocalLinks);
}

const filterLocalLinks = async (links) => {
  return links.filter(async (link) => isLocal(await getHref(link)));
}

const isLocal = (url) => {
  return url.startsWith(BASE_URL);
}

const getHref = async (link) => {
  return await link.getProperty('href').then(handle => handle.jsonValue());
}

const changeHrefs = async (page) => {
  const links = await getAllLocalLinks(page);
  for (const link of links) {
    const href = await getHref(link);
    const newHref = href.replace(BASE_URL, 'https://docs.utnso.com.ar');
    await link.evaluate((node, newHref) => node.href = newHref, newHref);
  }
}

const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

exportPDF(process.argv[2]);
