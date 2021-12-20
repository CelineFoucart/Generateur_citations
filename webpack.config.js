const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/script.ts",
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}