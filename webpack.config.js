var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    context : path.resolve("src"),
    entry : {
        app: "js/app.js"
    },
    resolve: {
        root: path.resolve(__dirname + "/src"),
        extensions: ["", ".js", ".jsx", ".json", ".scss"]
    },
    output : {
        path: path.resolve(__dirname + "/build/"),
        publicPath : "/build/",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title : "Webpack is awesome"
        })
    ],
    watch : true
};