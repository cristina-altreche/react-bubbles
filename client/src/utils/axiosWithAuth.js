import axios from 'axios'

export function axiosWithAuth() {
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}