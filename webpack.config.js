var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    module: {//在配置文件里添加JSON loader
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }//在webpack的module部分的loaders里进行配置即可
                ]

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }

                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright jackwang"),//在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true
    }
}