import axios from 'axios'

const base_url = 'https://weddinger.herokuapp.com'

export async function login(loginInfo) {
    const res = await axios.post(`${base_url}/authenticate/`, loginInfo);
    return res.data
}

export async function fetchData(req) {
    try {
        const response = await axios.get(`${base_url}/${req}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function postData(data, req) {
    try {
        const response = await axios.post(`${base_url}/${req}/`, data);
    } catch (error) {
        console.log(error)
    }
}

async function delete_data(id){
    const response = await getToken(props.username,props.password)
    const {access:token,refresh} = response.data
    const url = baseURL+apiData+id
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    return axios.delete(url,config)
}




