const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
//        new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                warnings: false
//            },
//            output: {
//                comments: false
//            },
//            sourceMap: true
//        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        })
    ]
};

