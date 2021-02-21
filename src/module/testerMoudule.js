import { post } from './methods'

export default {
    // 用户权限查询接口 ，返回用户菜单
    tester: ({
        taskname,
        taskdetail,
        degree,
        tasklabel,
        taskperson,
        tasktime, }) => post('/api/user/transaction', {


            taskname,
            taskdetail,
            degree,
            tasklabel,
            taskperson,
            tasktime, apiName: 'insertBugOrder', bipcode: 'BIP10009', activitycode: 'ACT10009'
        }),
}