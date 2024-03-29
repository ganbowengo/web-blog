/**
 *
 * author ganbowen
 * description 开发环境
 * created 2019/05/03 14:27:18
 *
 */
'use strict'

const conf = require('./conf')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const proxy = {
    '/frontend': {
        target: 'http://localhost:8099',
        secure: false,
        pathRewrite: {
            '^/frontend': '/' // 调用'http://192.168.2.231:8000/search'，直接写‘/api/search’即可
        }
    }
}

module.exports = merge(baseConfig, {
    mode: 'development',
    // 运行的配置
    devtool: 'cheap-module-eval-source-map', // 可以在开发环境看到源文件
    devServer: {
        open: true,
        compress: true,
        clientLogLevel: 'warning',
        host: conf.host,
        port: conf.port,
        inline: true,
        hot: true,
        openPage: 'system.html',
        disableHostCheck: true,
        proxy
        // proxy: {
        //     '/proxy': {
        //         target: 'http://your_api_server.com',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/proxy': ''
        //         }
        //  }
        // 假设你主机名为 localhost:8080 , 请求 API 的 url 是 http：//your_api_server.com/user/list
        // '/proxy'：如果点击某个按钮，触发请求 API 事件，这时请求 url 是http：//localhost:8080/proxy/user/list 。
        // changeOrigin：如果 true ，那么 http：//localhost:8080/proxy/user/list 变为 http：//your_api_server.com/proxy/user/list 。但还不是我们要的 url 。
        // pathRewrite：重写路径。匹配 /proxy ，然后变为'' ，那么 url 最终为 http：//your_api_server.com/user/list 。

    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                },
                'sass-loader'
            ]
        }]
    }
})