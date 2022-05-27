let initialState = {}
export type initialStateType = typeof initialState
const TestReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-TEST':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setTestACType
type setTestACType = ReturnType<typeof setTestAC>

export const setTestAC = () => ({type: 'SET-TEST',} as const)

export default TestReducer