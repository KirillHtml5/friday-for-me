let initialState = {}
export type initialStateType = typeof initialState

const LoginReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-LOGIN':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setLoginACType
type setLoginACType = ReturnType<typeof setLoginAC>

export const setLoginAC = () => ({type: 'SET-LOGIN',} as const)

export default LoginReducer