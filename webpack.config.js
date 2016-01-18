module.exports = {
    entry : "./src/js/app.js",
    output : {
        filename : "./build/js/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch : true
};