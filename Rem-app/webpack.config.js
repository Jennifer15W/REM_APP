const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/sass/main.scss',
    output: {
        filename: 'dummy.js', 
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        open: true, // Abre automáticamente el navegador
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // Tu plantilla HTML
        }),
    ],
};
