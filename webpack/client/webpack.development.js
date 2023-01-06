const commonPaths = require('../commonPaths');
const path = require('path');
const filenames = require('../utils/filenames');
const mainRules = require('../additionally/rules');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const extensions = require('../additionally/extensions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ModuleFederationConfig = require('../module-federation');

const devConfig = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../../src/index.tsx'),
    },
    output: {
        path: path.join(__dirname, '../../dist/client'),
        filename: filenames.filenameWithContentHash('[name]', 'js'),
        publicPath: 'http://localhost:8080/client/',
        clean: true
    },
    resolve: {
        extensions: [...extensions],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            ...mainRules, 
        {
            test: /\.(css|scss)$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                      loader: "css-loader",
                  },
                  {
                      loader: "sass-loader",
                  },
              ],
            exclude: /node_modules/
        }
    ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../../public/index.html'),
            favicon: path.resolve(__dirname, '../../public/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: filenames.filenameWithHash('bundle', 'css'),
        }),
        new ModuleFederationPlugin(ModuleFederationConfig),
    ],
}

module.exports = devConfig;
