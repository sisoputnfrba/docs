import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('docs/blog/posts')
      .flatMap((category) => {
        const posts = fs.readdirSync(`docs/blog/posts/${category}`);
        return Array.from({ length: Math.ceil(posts.length / 5) }, (_, i) => ({
          params: { category, page: `${i + 1}` },
        }));
      })
  }
}
