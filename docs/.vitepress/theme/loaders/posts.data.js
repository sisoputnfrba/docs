import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/**/*.md', {
  excerpt: true,
  transform: (raw) => raw
    .map(({ url, frontmatter, excerpt }) => {
      return {
        title: frontmatter.title,
        excerpt: frontmatter.description,
        date: extractDate(url),
        url,
        category: extractCategory(url),
        author: frontmatter.author,
      }
    })
    .sort((a, b) => b.date.timestamp - a.date.timestamp)
})

function extractDate(url = '') {
  const date = new Date(url.substring(url.lastIndexOf('/') + 1, url.indexOf('_')));
  return {
    timestamp: date.getTime(),
    text: date.toLocaleDateString('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}

function extractCategory(url = '') {
  return url.substring('/blog/posts/'.length, url.lastIndexOf('/'));
}
