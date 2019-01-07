/// <binding AfterBuild='Run - Development' />
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    entry: ['./src/scss/main.scss'], 
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 25664
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/css/')
    }, 
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },  
    plugins: [     
        //new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),  
        new CleanWebpackPlugin(['./wwwroot/dist/css/'])           
    ]    
}