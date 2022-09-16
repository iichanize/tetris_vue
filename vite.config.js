// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: process.env.PORT,
  server: {
    https:true,
    strictPort: true,
    hmr: {
      port: process.env.PORT,
      protocol: "wss",
      host:"localhost"
    }
  }
}