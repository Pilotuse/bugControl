import { post } from './methods'

export default {
    // 用户查找
    queryUser: () => post('/api/user/transaction', { apiName: 'queryUserType', bipcode: 'BIP10008', activitycode: 'ACT10008', roleType: 'developer' }),
    // 用户权限查询接口 ，返回用户菜单
    insertBugOrder: ({ taskname, handler, endtime, label, degree, details }) => post('/api/user/transaction', {
        taskname, handler, endtime, label, degree, details, apiName: 'insertBugOrder', bipcode: 'BIP10009', activitycode: 'ACT10009'
    }),
    queryBugOrder: () => post('/api/user/transaction', { apiName: 'queryBugOrder', bipcode: 'BIP10010', activitycode: 'ACT10010' }),
    queryOwnOrder: () => post('api/user/transaction', { apiName: 'queryOwnBug', bipcode: 'BIP10011', activitycode: 'ACT10011' })
}