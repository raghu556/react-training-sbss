module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: 'style-loader!css-loader',
                test: /\.css$/
            }
        ]
    }
};