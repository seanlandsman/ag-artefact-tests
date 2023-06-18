const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        'ag-grid-community/styles': path.resolve(__dirname, 'node_modules/ag-grid-community/styles'),
        // 'ag-grid-community': path.resolve(__dirname, 'node_modules/ag-grid-community/dist/ag-grid-community.cjs.js'),
      }
    },
    performance: {
      hints: false
    }
  },
  publicPath: "/packages/vue2-community/dist/",
  transpileDependencies: true
})
