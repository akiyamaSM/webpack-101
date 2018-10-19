const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isDev = process.env.NODE_ENV === "dev"
const isProd = !isDev

module.exports = {
        entry: "./resources/js/app.js",
        output: {
            path: path.resolve('./dist'),
            filename: "build.js"
        },
    devtool: "source-map",
    devServer: {
            lazy: false
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
        },
        plugins: [
            ...isProd ? [new UglifyJsPlugin({
                sourceMap: false
            })] : []
        ]
}