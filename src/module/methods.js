import axios from './axios'

// 文件说明： 这个文件别动！！！
// 这个文件别动，是封装全局请求的一个骨架，直接使用传参就行，目前的接口只有get和post，不需要其他的接口请求类型
// 使用方式是在当前目录下创建一个 xxxModule.js 将改文件引入进去就行。

const post = (url, data) => {
    return axios({
        method: 'post',
        url,
        data
    })
}

const get = (url, params) => {
    return axios({
        method: 'get',
        url,
        params
    })
}

export {
    post, get
}