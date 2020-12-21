const HtmlWebpackPlugin = require('html-webpack-plugin'),
    { resolve } = require("path");
console.log(resolve(__dirname, "dist"));
module.exports = {
    // 入口文件
    entry: "./src/js/index.js",
    // 导出文件
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // 扩展插件
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src/index.html")
        })
    ]
    // 开发服务器-webpack-dev-server
    ,
    devServer: {
        contentBase: "./",
        open: true
    }
}