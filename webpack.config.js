const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/style.scss",
  output: {
    filename: "main.css",
    path: path.resolve(__dirname, "dist")
  },
  module:
  {
      rules:[
          {
              test:/\.scss$/,
              use:[
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
              ]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
          {
            loader: 'file-loader',
          },
        ],
          }
      ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'index.html',
      filename: 'index.html'
    }),
  ]
};