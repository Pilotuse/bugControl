import { post } from './methods'

export default {
    // 用户权限查询接口 ，返回用户菜单
    tester: () => post('/api/user/transaction', {
        apiName: 'querOwnBug', bipcode: 'BIP10011', activitycode: 'ACT10011'
    }),
}