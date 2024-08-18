export default {
  paths() {
    return Array.from({ length: 100 }, (_, i) => ({
      params: { page: `${i + 1}` },
    }));
  }
}
