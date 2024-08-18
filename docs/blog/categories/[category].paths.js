import fs from 'fs';

export default {
  paths() {
    return fs
      .readdirSync('docs/blog/posts')
      .flatMap((year) => [`1c${year}`, `2c${year}`])
      .map((category) => ({ params: { category } }))
  }
}
