import axios from 'axios'

const base_url = 'https://weddinger.herokuapp.com/'

export async function login(loginInfo) {
    const res = await axios.post(`${base_url}api/token/`, loginInfo);
    return res
}

export async function fetchData(loginInfo=null, req) {
    try {
        if (loginInfo){
        const tokenResponse = await login(loginInfo)
        console.log(tokenResponse)
        const { refresh, access: token } = tokenResponse.data;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }}
        const response = await axios.get(`${base_url}${req}/`);
        return response.data;
    } catch (error) {
        alert('Wrong username or password')
    }

}

