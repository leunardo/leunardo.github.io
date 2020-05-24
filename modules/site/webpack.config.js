const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, "../../dist/site");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.json",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8080,
    },
    output: {
        path: dist,
        filename: "bundle.js",
    },
    entry: "./src/index.ts",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Site",
            filename: "index.html",
            template: "src/index.html",
            alwaysWriteToDisk: true,
            minify: false,
            favicon: './src/favicon.ico'
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: dist,
        }),
    ],
};
