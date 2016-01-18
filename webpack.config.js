var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry : {
        app: "./src/js/app.js"
    },
    resolve: {
        root: path.resolve(__dirname + "/src"),
        extensions: ["", ".js", ".jsx", ".json", ".scss"]
    },
    output : {
        path: __dirname + "/build",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title : "Webpack is awesome"
        })
    ]
};