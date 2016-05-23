const path = require('path');
const webpack = require('webpack');

const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
//todo: Revisit CommonChumnk when webPAck 2.0.0 is out...
var vendors = [
    "react",
    "react-dom",
    "react-redux",
    "redux",
    "redux-persist",
    "radium",
    "material-ui",
    "react-tap-event-plugin"
];*/
var vendors = [];

var vendorPlugin = new CommonsChunkPlugin({
    name: "vendors",
    filename: "vendors.js",
//    children: true,
    minChunks: Infinity,
    chunks: vendors
});

var dedupePlugin = new webpack.optimize.DedupePlugin();

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    output: {
        comments: false
    },
//    sourceMap: true
    sourceMap: false
});

var htmlWebpackPlugin = new HtmlWebpackPlugin({
    inject: true,
    title: 'Yarn 2'
});

var sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map'
});

module.exports = {
//    debug: true,
//    devtool: 'eval-cheap-module-source-map',
    entry: {
        app: './src/js/main',
        vendors: vendors
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },
    plugins: [
        vendorPlugin,
//        uglifyPlugin,
//        dedupePlugin,
//        sourceMapDevToolPlugin,
//        new BellOnBundlerErrorPlugin(),
        new ExtractTextPlugin("[name].css"),
        htmlWebpackPlugin
    ]
};

