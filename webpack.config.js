const path = require('path')

module.exports = {
    entry: "./resources/js/app.js",
    output: {
        path: path.resolve('./dist'),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}