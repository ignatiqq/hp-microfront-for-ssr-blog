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
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
        exclude: /node_modules/
    }
];

module.exports = mainRules;