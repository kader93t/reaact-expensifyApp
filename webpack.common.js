const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle-[contenthash].js"
    },
    
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/template.html",
            title: "Expensify-App"
        }
    ), new CleanWebpackPlugin()],
    
    module: {
        rules: [{
            use: [
                { loader: "babel-loader" }
            ],
            test: /\.js$/,
            exclude: /node_modules/
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 9000
      }
};