// const VUE_PORT = process.env.PORT || 5000;
module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  port: process.env.PORT,
  server: {
    https:true,
    hmr: false
    // hmr: {
    //   host:'tetris-vue.herokuapp.com',
    //   protocol: 'wss',
    //   port: process.env.PORT
    // }
  }
}