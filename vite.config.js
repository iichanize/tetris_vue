const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: VUE_PORT,
  server: {
    hmr: {
      host:'https://tetris-vue.herokuapp.com',
      protocol: 'wss',
      port: VUE_PORT
    }
  }
}