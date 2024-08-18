import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform: (raw) => raw
    .map(({ url, frontmatter, excerpt }) => {
      return {
        title: frontmatter.title,
        excerpt: frontmatter.description,
        date: formatDate(frontmatter.date),
        url,
        category: frontmatter.category ?? "Información General",
        author: frontmatter.author,
      }
    })
    .sort((a, b) => b.date.timestamp - a.date.timestamp)
})

function formatDate(text) {
  const date = new Date(text)
  return {
    timestamp: date.getTime(),
    text: date.toLocaleDateString('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
