import { post } from './methods'

export default {
    // 用户权限查询接口 ，返回用户菜单
    tester: ({
        taskname,
        taskdetail,
        degree,
        tasklabel,
        taskperson,
        cutoffday,
        status
    }) => post('/api/user/transaction', {
        taskname,
        taskdetail,
        degree,
        tasklabel,
        taskperson,
        cutoffday, status, apiName: 'queryBugOrder', bipcode: 'BIP10010', activitycode: 'ACT10010'
    }),
}