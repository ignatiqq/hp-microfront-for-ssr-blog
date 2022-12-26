const env = process.env.NODE_ENV || 'development';
const envConfig = require(`./webpack/webpack.${env}.js`);

module.exports = envConfig;