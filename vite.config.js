// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: "./",
  assetsDir: "assets",
  port: process.env.PORT,
  server: {
    host:true,
    https:true,
    open: true,
    strictPort: true,
    // port: process.env.PORT,
    hmr: {
      port: 443,
      protocol: "wss",
      // host:"localhost"
    }
  }
}