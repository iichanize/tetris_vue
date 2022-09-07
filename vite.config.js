const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: VUE_PORT,
  server: {
    hmr: {
      protocol: 'ws',
      port: VUE_PORT
    }
  }
}