const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: {
            import: "./index.js",
            dependOn: 'D3'

        },
        D3: "./src/3d.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        library: {
            name: "[name]",
            type: "global",
            export: "D3"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            chunks: ["D3", "index"]
        })
    ]
};