import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/**/*.md', {
  excerpt: true,
  transform: (raw) => raw
    .map(({ url, frontmatter, excerpt }) => {
      return {
        title: frontmatter.title,
        excerpt: frontmatter.description,
        date: formatDate(url),
        url,
        category: frontmatter.category ?? "Información General",
        author: frontmatter.author,
      }
    })
    .sort((a, b) => b.date.timestamp - a.date.timestamp)
})

function formatDate(url = '') {
  const date = new Date(url.substring('blog/posts/'.length, url.lastIndexOf('/')))
  return {
    timestamp: date.getTime(),
    text: date.toLocaleDateString('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
