/**
 *
 * author ganbowen
 * description 基础配置
 * created 2019/05/03 14:30:18
 *
 */
'use strict'
const os = require('os')
const path = require('path')
const conf = require('./conf')
const webpack = require('webpack')
const HappyPack = require('happypack') // 多线程打包
const {
    VueLoaderPlugin
} = require('vue-loader') // 处理.vue文件
const HtmlWebpackPlugin = require('html-webpack-plugin') //动态生成HTML模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css分离打包处理
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
}) // 获取cpu数量
const cssLoader = new MiniCssExtractPlugin({
    use: [
        'happypack/loader?id=css'
    ]
})

const resolve = conf.resolve
// 生成happypack plugin
const creatHappypack = (id, loaders) => new HappyPack({
    id,
    loaders,
    threadPool: happyThreadPool
})

module.exports = {
    entry: {
        'system': ['@babel/polyfill', conf.join(`src/pages/index.js`)]
    },
    output: {
        path: resolve('dist'),
        filename: 'static/js/[name]-[hash:8].js',
        chunkFilename: 'static/js/[name]-[hash:8].js'
    },
    // 文件映射
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '@system': resolve('src/pages'),
            '&': resolve('')
        }
    },
    module: {
        rules: [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                //指定检查的目录
                include: [resolve('src')],
                //eslint检查报告的格式规范
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=js',
                include: [resolve('src')],
                exclude: [/node_modules/]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    js: 'happypack/loader?id=vue',
                    css: cssLoader
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash:5].min.[ext]',
                        limit: 5000,
                        outputPath: 'static/css/fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `--SYSTEM--`,
            template: 'index.html',
            filename: `system.html`,
            chunks: ['common', 'manifest', 'vendor', 'system'],
            minify: {
                collapseWhitespace: false // 压缩选项
            }
        }),
        new VueLoaderPlugin(),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        creatHappypack('js', ['babel-loader?cacheDirectory=true']),
        creatHappypack('vue', ['babel-loader?cacheDirectory=true']),
        creatHappypack('css', ['css-loader', 'vue-style-loader'])
    ]
}