let initialState = {}
export type initialStateType = typeof initialState
const RecoveryReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-RECOVERY':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setRecoveryACType
type setRecoveryACType = ReturnType<typeof setRecoveryAC>

export const setRecoveryAC = () => ({type: 'SET-RECOVERY',} as const)

export default RecoveryReducer