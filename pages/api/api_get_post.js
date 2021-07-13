import axios from 'axios'

const base_url = 'https://weddinger.herokuapp.com'

export async function login(loginInfo) {
    const res = await axios.post(`${base_url}/api/token/`, loginInfo);
    return res
}

export async function fetchData(req) {
    try {
        const response = await axios.get(`${base_url}/${req}/`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

