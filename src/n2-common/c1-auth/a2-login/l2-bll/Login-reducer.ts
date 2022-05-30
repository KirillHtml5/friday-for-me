import {Dispatch} from "redux";
import {loginApi} from "../../../../n1-main/m2-bll/api/api";


let initialState = {
    isLoggedIn: false
}
export type initialStateType = typeof initialState

const LoginReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'login/SET-LOGIN':
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}
type ActionType = setLoginACType
type setLoginACType = ReturnType<typeof setLoginAC>


export const setLoginAC = (isLoggedIn: boolean) => ({type: 'login/SET-LOGIN', isLoggedIn} as const)

export const setLoginTC = (email: string, password: string, rememberMe: boolean): any => (dispatch: Dispatch) => {
    loginApi.login(email, password, rememberMe)
        .then((res) => {
            dispatch(setLoginAC(true))
            console.log(res.data)
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log('error', {...e})
        })
}

export default LoginReducer