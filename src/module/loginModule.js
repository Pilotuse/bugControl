import { post } from './methods'

export default {
    // 登录接口
    login: ({ username, password }) => {
        return  post('/api/user/login', { username, password, apiName: 'login', bipcode: 'BIP10004', activitycode: 'ACT10004' })    
    },
    // 单一用户注册
    register: (info) => post('/api/user/register', info),
    // 批量用户注册(建议注册数量小于200人) -- 文件接口  用户名，预设密码(基础校验，大小写字母以及数字，不能含有特殊字符)
    batchRegister: (info) => post('/api/user/batchRegister', info),
    // 用户激活接口
    activation: (info) => post('/api/user/activation', info)
}