var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

if (process.env.BUILD_ENV !== 'production') {

    var server = new WebpackDevServer(webpack(config), {
        //    contentBase: "/",
        //    publicPath: "/",
        //    hot: true,
        stats: {
            colors: true
        },
        progress: true,
        historyApiFallback: true
    });

    server.listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }
        console.log('Listening at http://localhost:3000/');
    });

}
