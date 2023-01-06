const env = process.env.NODE_ENV || 'development';
const envConfig = require(`./webpack/client/webpack.${env}.js`);

module.exports = envConfig;