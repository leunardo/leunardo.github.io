const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8080,
    },
});