const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mainRules = [
    {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babe/react']
            },
        },
        exclude: /node_modules/
    },
    {
        test: /\.ts(x?)$/,
        use: {
            loader: 'ts-loader'
        },
        exclude: /node_modules/
    },
    {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
              loader: "css-loader",
              options: {
                  importLoaders: 1,
                  modules: {
                      mode: "local",
                  },
              },
          },
          {
              loader: "sass-loader",
          },
      ],
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
        exclude: /node_modules/
    }
];

module.exports = mainRules;