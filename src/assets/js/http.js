/**
 *
 * author ganbowen
 * description axios 封装文件
 * created 2019/05/4 14:33:09
 *
 */
import axios from 'axios'
import Vue from 'vue'
import { transDictionary } from '../utils/trans'
import { Message } from 'iview'
Vue.prototype.$Message = Message

const VUE_UI_OBJ = new Vue()
const BASE_URL = '/frontend'
const STATUS_LIST = [401, 403, 500]
const jumpLogin = () => {
    window.location.href = 'index.html'
}

axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.url = BASE_URL + config.url
    if (config.data && config.data.options) {
        config.options = config.data.options
        config.data = config.data.params
    }
    return config
}, error => Promise.reject(error))

axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.config.url === '/frontend/sys/token') {
        response.headers.author = response.headers.author || 'mock'
        return response
    } else {
        let result = response.data
        if (!result.success) {
            VUE_UI_OBJ.$Message.error(result.errorMsg)
        } else {
            let optionsConfig = response.config.options
            if (optionsConfig) {
                if (result && result.data) {
                    result.data = transDictionary(result.data, optionsConfig.trans, optionsConfig.trnasType)
                }
            }
        }
        return result
    }
}, error => {
    // 对响应错误做点什么
    let response = error.response || {}
    let data = response.data || {}
    if (STATUS_LIST.indexOf(response.status) > -1) {
        VUE_UI_OBJ.$Message.error(data.message)
        jumpLogin()
    }
    return Promise.reject(error)
})

export default axios
