module.exports = {
  outDir: "docs",
  base: ".",
  assetsDir: "assets",
  server: {
    proxy: {
      "/api": {
        target: "https://tetris-vue-db.herokuapp.com/score/ranking",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  }
}