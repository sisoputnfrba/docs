import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('docs/blog/posts')
      .map((category) => ({ params: { category } }))
  }
}
