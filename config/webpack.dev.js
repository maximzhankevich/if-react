
const { merge } = require('webpack-merge');
const prodConfig = require('./webpack.prod.js');

module.exports = merge(prodConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        open: true,
        },
    devtool: 'inline-source-map',
});
