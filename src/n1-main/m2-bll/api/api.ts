import axios from "axios";
//https://neko-back.herokuapp.com/2.0
//'http://localhost:7542/2.0/'
export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const loginApi = {
    getTime() {
        const promise = instance.get('/ping')
        return promise
    },
    postTime(time: number) {
        const promise = instance.post('/ping', {frontTime: time})
        return promise
    }
}