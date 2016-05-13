const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './js/main.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }],
        query: {
            presets: ['es2016', 'react', 'stage-0']
        }
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

