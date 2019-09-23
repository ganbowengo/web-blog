/**
 *
 * author ganbowen
 * description system 页面的主文件
 * created 2019/05/08 14:33:57
 *
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from '@/assets/js/http'
import globalTool from '@/assets/utils/global'
import initCommonUi from '@system/common-ui'
import store from './vuex'

import {
    Input,
    Icon,
    Card
} from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/styles/index.scss'
import '@/assets/styles/ivu-style-reset.scss'
import 'animate.css'

Vue.prototype.http = http
Vue.prototype.globalTool = globalTool
Vue.component('Input', Input)
Vue.component('Icon', Icon)
Vue.component('Card', Card)

initCommonUi()
export default new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
