const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    devtool: false,
    entry: './src/main.jsx',
    resolve: {
        // 导入 js 和 jsx 时可以不用写后缀
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                    },
                ],
            },
        ],
    },
}


module.exports = config
