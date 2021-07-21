import axios from 'axios'
/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams):Promise<API.LoginResult> {
    return axios('/api/login/account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }).then(res=>res.data);
}