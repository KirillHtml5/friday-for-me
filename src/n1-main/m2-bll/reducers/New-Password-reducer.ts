let initialState = {}
export type initialStateType = typeof initialState
const NewPasswordReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-NEW-PASSWORD':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setNewPasswordACType
type setNewPasswordACType = ReturnType<typeof setNewPasswordAC>

export const setNewPasswordAC = () => ({type: 'SET-NEW-PASSWORD',} as const)

export default NewPasswordReducer