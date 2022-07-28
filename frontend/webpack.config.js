const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
  
module.exports = {  
    entry: './src/index.js',  
    output: {  
        path: path.join(__dirname, '/public'),  
        filename: 'bundle.js'  
    },  
    devServer: {  
        port: 3010,
        static: { 
            directory: path.resolve(__dirname, './src/assets'), 
            publicPath: '/assets'
        } ,
        watchFiles: {
            paths: ['src/*.js', 'public/*'],
            options: {
              usePolling: false,
            },
        },
        historyApiFallback: true
    },  
    module: {  
        rules: [  
            {  
                test: /\.(js|jsx)$/,  
                exclude: /node_modules/,  
                use: {  
                    loader: "babel-loader",  
                }
            },
            {
                test: /\.(css|sass)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },  
        ]  
    }, 
    // externals: {
    //     jquery: 'jQuery',
    // }, 
    plugins:[  
        new HtmlWebpackPlugin({  
            template: './src/index.html'  
        }),
        new MiniCssExtractPlugin(),
        new Dotenv({
            path: './.env',
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: "./src/assets", to: path.resolve(__dirname, './public/assets') }
            ],
          }),  
    ]  
}  