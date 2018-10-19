const path = require('path')

module.exports = {
    entry: "./resources/js/app.js",
    output: {
        path: path.resolve('./dist'),
        filename: "build.js"
    }
}