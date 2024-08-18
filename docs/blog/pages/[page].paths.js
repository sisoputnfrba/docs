export default {
  paths() {
    return Array.from({ length: 50 }, (_, i) => ({
      params: { page: `${i + 1}` },
    }));
  }
}
