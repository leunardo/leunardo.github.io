const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, "../../dist/blog");

module.exports = {
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
                test: /index.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /highlight\.js.*\.css$/i,
                use: [
                    'to-string-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 0,
                            sourceMap: false
                        }
                    }],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: dist,
        filename: "bundle.js",
    },
    entry: "./src/index.ts",
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              { from: './src/robots.txt' },
            ],
          }),
        new HtmlWebpackPlugin({
            title: "Blog",
            filename: "index.html",
            template: "src/index.html",
            alwaysWriteToDisk: true,
            minify: false,
            favicon: './src/favicon.ico',
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: dist,
        }),
    ],
};
