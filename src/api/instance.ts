import axios from 'axios'

const { REACT_APP_LOCAL_API_URL, REACT_APP_REMOTE_API_URL } = process.env;

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? REACT_APP_REMOTE_API_URL : REACT_APP_LOCAL_API_URL,
    withCredentials: true,
})
