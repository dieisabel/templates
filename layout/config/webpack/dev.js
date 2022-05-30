const Webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./common");
const CONSTANTS = require("./constants");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
    static: [
      {
        directory: CONSTANTS.PATHS.DIST,
        publicPath: CONSTANTS.PATHS.DIST,
      },
      { directory: CONSTANTS.PATHS.SRC },
    ],
    client: {
      overlay: true,
    },
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};

module.exports = merge(common, config);
