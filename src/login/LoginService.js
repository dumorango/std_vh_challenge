import axios from 'axios';

const loginUrl = 'Customer/auth'

export async function login({ email, password }) {
    return axios.post(loginUrl, {}, {
        params: {
            email,
            password
        }
    })
}
