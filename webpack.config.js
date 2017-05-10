const path = require('path');

module.exports = {
    entry: "./app",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },

	devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [['env', {
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            }
        ]
    }

};
