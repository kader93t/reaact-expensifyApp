const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    //publicPath: "/public",
    historyApiFallback: true,
    port: 9000
  },
  module: {
    rules: [
      {
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ],
        test: /\.s?css$/
      }
    ]
  }
});