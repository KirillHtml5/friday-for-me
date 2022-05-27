let initialState = {}
export type initialStateType = typeof initialState
const RegistrationReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-REGISTRATION':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setRegistrationACType
type setRegistrationACType = ReturnType<typeof setRegistrationAC>

export const setRegistrationAC = () => ({type: 'SET-REGISTRATION',} as const)

export default RegistrationReducer