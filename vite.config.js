// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: process.env.PORT,
  server: {
    https:true,
    hmr: {
      port: 443,
      protocol: "wss"
    }
  }
}