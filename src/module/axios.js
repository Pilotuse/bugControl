import axios from "axios";
import { Message } from 'element-ui'
import router from '../router'
// 全局拦截器，这个文件不要动！！！！

// 配置loading动画
import { Loading } from 'element-ui'

let loading
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '联络地球中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
    })
}

function endLoading() {
    loading.close()
}

let needLoadingRequestCount = 0
const showFullScreenLoading = function () {
    if (needLoadingRequestCount === 0) startLoading();
    needLoadingRequestCount++
}

const tryHideFullScreenLoading = function () {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) endLoading();
}


// 配置全局的拦截器
axios.interceptors.request.use(config => {
    // 如果配置了isLoading: false，则不显示loading
    if (config.headers.isLoading !== false) showFullScreenLoading();
    if (localStorage.getItem('users')) {
        let token = JSON.parse(localStorage.getItem("users")).token
        config.headers.common["authorization"] = token
    }
    return config;
}, error => {
    tryHideFullScreenLoading()
    Message.error({ message: 'Oops 跟地球断网了！' })
    return Promise.reject(error)
});



//响应头拦截
axios.interceptors.response.use(response => {
    tryHideFullScreenLoading()
    return response;
}, error => {
    //当返回信息为未登录或者登录失效的时候重定向为登录页面
    if (error.response.status == '401') {
        Message.error({ message: error.response.data.msg })
        localStorage.clear()
        router.push({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
        })
    }
    tryHideFullScreenLoading()
    return Promise.reject(error)
});

export default axios;
// //default  的东西  别人使用的时候  可以随便取名字
