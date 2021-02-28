import { post } from './methods'

export default {
    // 用户列表查询
    queryMember: ({ roleType, page }) => post('/api/user/transaction', { apiName: 'queryMember', bipcode: 'BIP10012', activitycode: 'ACT10012', roleType, page }),
    queryMemberLength: ({ roleType }) => post('/api/user/transaction', { apiName: 'queryMemberLength', bipcode: 'BIP10013', activitycode: 'ACT10013', roleType }),
}