const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
const BASE_DEST = process.env.DESTINATION || 'docs/.vuepress/public/pdf';

module.exports = {
  BASE_URL,
  BASE_DEST,
};
