// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: "tetris_vue",
  assetsDir: "assets",
  port: process.env.PORT,
  server: {
    host:true,
    // https:true,
    strictPort: true,
    // port: process.env.PORT,
    hmr: {
      clientPort: 443,
      protocol: "wss",
      // host:"localhost"
    }
  }
}