// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: process.env.PORT,
  strictPort: true,
  server: {
    https:true,
    hmr: {
      clientPort: 443,
      protocol: "wss"
    }
  }
}