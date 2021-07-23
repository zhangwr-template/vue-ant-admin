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

export async function getBugStatus(body: any):Promise<any> {
    return axios('/api/chart/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }).then(res=>res.data);
}

export async function getBugInfoByIds(body: any):Promise<any> {
    return axios('/api/chart/getBugInfoByIds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }).then(res=>{
        console.log(res)
        return res.data
    });
}



