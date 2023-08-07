const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./localDevServer/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      "ag-grid-common": path.resolve("./node_modules/ag-grid-common"),
      "ag-grid-enterprise": path.resolve("./node_modules/ag-grid-enterprise"),
    },
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "localDevServer/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./localDevServer/public/index.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 8000,
    historyApiFallback: true,
  },
  devtool: "source-map",
};
