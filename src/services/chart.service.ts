import axios from 'axios'

export async function getBugCompare(body: any):Promise<any> {
    return axios('/api/chart/bug', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }).then(res=>res.data);
}