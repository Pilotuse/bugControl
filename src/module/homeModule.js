import { post } from './methods'

export default {
    // 用户权限查询接口 ，返回用户菜单
    userRole: (info) => post('/api/user/userRole', info),
    getUserMenu:() => post('/api/user/transaction',{apiName: 'queryUserMenu', bipcode: 'BIP10007', activitycode: 'ACT10007' })
}