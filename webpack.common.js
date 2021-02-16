const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
require("@babel/polyfill");

process.env.NODE_ENV = process.env.NODE_ENV || "development"
if (process.env.NODE_ENV === "test") {
    require("dotenv").config({
        path: ".env.test"
    });
} else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({
        path: ".env.development"
    });
};

module.exports = {
    entry: ["@babel/polyfill","./src/app.js"],
    
    output: {
        path: path.join(__dirname, "public"),
       // publicPath: "/public/",
        filename: "bundle-[contenthash].js"
       
    },
    
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/template.html",
            title: "Expensify-App"
        }
    )//, new CleanWebpackPlugin()
    ,  new webpack.DefinePlugin({
            "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
            "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            "process.env.FIREBASE_MESSAGEING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGEING_SENDER_ID),
            "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
    })
        
    ],
    
    module: {
        rules: [{
            use: [
                { loader: "babel-loader" }
            ],
            test: /\.js$/,
            exclude: /node_modules/
        },
            {
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
        }
        ]
    },
   
};