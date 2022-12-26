const path = require("path");

const dependencies = require('../../package.json').dependencies;

module.exports = {
    name: 'homePage',
    filename: 'homePageRemote.js',
    remotes: {},
    exposes: {
        './Homepage': path.resolve(__dirname, '../../src/Homepage.tsx'),
    },
    shared: {
        react: {
            singleton: true,
            requiredVersion: dependencies['react'],
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
        }
    }
}