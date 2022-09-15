// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  server: {
    https:true,
    strictPort: true,
    port: process.env.PORT,
    hmr: {
      port: 443,
      protocol: "wss",
      host:"localhost"
    }
  }
}