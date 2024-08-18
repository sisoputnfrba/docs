import fs from 'fs'

const posts = fs
  .readdirSync('docs/blog/posts')
  .flatMap((category) => fs.readdirSync(`docs/blog/posts/${category}`));

export default {
  paths() {
    return Array.from({ length: Math.ceil(posts.length / 5) }, (_, i) => ({
      params: { page: `${i + 1}` },
    }));
  }
}
