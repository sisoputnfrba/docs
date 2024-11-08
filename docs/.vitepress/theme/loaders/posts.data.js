import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/**/*.md', {
  excerpt: true,
  transform: (raw) => raw
    .map(({ url, frontmatter, excerpt }) => {
      return {
        title: frontmatter.title,
        excerpt: extractExcerpt(excerpt),
        date: extractDate(url),
        url,
        category: extractCategory(url),
        author: frontmatter.author,
      }
    })
    .sort((a, b) => b.date.timestamp - a.date.timestamp)
})

function extractExcerpt(excerpt = '') {
  return excerpt.slice(excerpt.indexOf('<p>') + 3, excerpt.lastIndexOf('</p>'))
    .replace(/<[^>]*>/g, '');
}

function extractDate(url = '') {
  const date = new Date(url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('_')));
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
  return url.match(/\/blog\/posts\/(.*)\//)?.[1];
}
