const path = require('path');
const mainRules = require('../additionally/rules');
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const extensions = require('../additionally/extensions');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const isDev = mode === 'development';

const dependencies = require('../../package.json').dependencies;

module.exports = {
    entry: {
        server: path.join(__dirname, '../../src/index.tsx')
    },
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
    },
    output: {
        path: path.join(__dirname, '../../dist/server'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: 'http://localhost:8080/server',
    },
    resolve: {
        extensions,
    },
	devtool: isDev ? 'inline-source-map' : 'source-map',
    module: {
        rules: [
            ...mainRules,
            {
                test: /\.(css|scss)$/i,
                    use: [
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
        new NodeFederationPlugin({
            name: 'homePage',
            filename: 'homePageRemote.js',
            library: { type: "commonjs-module" },
            remotes: {},
            exposes: {
                './Homepage': path.resolve(__dirname, '../../src/Homepage.tsx'),
            },
            // shared: {
            //     react: {
            //         singleton: true,
            //         requiredVersion: dependencies['react'],
            //     },
            //     'react-dom': {
            //         singleton: true,
            //         requiredVersion: dependencies['react-dom'],
            //     }
            // }
        }),
        new StreamingTargetPlugin({
            name: 'homePage',
            library: { type: "commonjs-module" },
            remotes: {},
        })
    ]
}