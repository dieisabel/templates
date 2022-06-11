const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const CONSTANTS = require("./constants");

const config = {
  externals: {
    paths: CONSTANTS.PATHS,
  },
  entry: {
    app: CONSTANTS.ENTRIES.JS,
    styles: CONSTANTS.ENTRIES.SCSS,
  },
  output: {
    filename: "js/[name].js",
    path: CONSTANTS.PATHS.DIST,
  },
  module: {
    rules: [
      {
        test: /\.jsm?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              configFile: CONSTANTS.CONFIGS.BABEL,
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: CONSTANTS.CONFIGS.POSTCSS,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [
                  CONSTANTS.PATHS.SRC + "/scss",
                ],
              },
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: CONSTANTS.ENTRIES.HTML,
      filename: "index.html",
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: CONSTANTS.PATHS.ASSETS,
          to: CONSTANTS.PATHS.DIST + "/assets",
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
};

module.exports = config
