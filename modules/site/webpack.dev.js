const merge = require('webpack-merge');
const config = require('./webpack.config');
const path = require("path");
const dist = path.resolve(__dirname, "../../dist/site");

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8080,
    },
});