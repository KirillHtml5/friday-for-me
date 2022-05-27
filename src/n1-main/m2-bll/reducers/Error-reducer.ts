let initialState = {}
export type initialStateType = typeof initialState
const ErrorReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-ERROR':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setErrorACType
type setErrorACType = ReturnType<typeof setErrorAC>

export const setErrorAC = () => ({type: 'SET-ERROR',} as const)

export default ErrorReducer