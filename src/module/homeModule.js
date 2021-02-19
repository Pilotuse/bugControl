import { post } from './methods'

export default {
    // 用户权限查询接口 ，返回用户菜单
    userRole: (info) => post('/api/user/userRole', info)
}