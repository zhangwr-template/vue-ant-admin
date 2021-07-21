// @ts-ignore
import Mock from 'mockjs'
// /api/login/account
console.log(Mock,'sss')
const newData = {
    status: 'ok',
    type:'type',
    currentAuthority: 'admin',
}
Mock.mock('/api/login/account',newData)