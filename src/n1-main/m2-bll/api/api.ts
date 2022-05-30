import axios from "axios";
//https://neko-back.herokuapp.com/2.0
//'http://localhost:7542/2.0/'
export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const timeApi = {
    getTime() {
        const promise = instance.get('/ping')
        return promise
    },
    postTime(time: number) {
        const promise = instance.post('/ping', {frontTime: time})
        return promise
    }
}

export const authRegisterApi = {
    register(email: string, password: string) {
        const promise = instance.post<string>('/auth/register', {email, password})
        return promise
    }
}

export const loginApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<any>('/auth/login', {email, password, rememberMe})
    }
}