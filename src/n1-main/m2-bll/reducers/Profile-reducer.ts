let initialState = {}
export type initialStateType = typeof initialState
const ProfileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...state
            }
        default:
            return state
    }
}
type ActionType = setProfileACType
type setProfileACType = ReturnType<typeof setProfileAC>

export const setProfileAC = () => ({type: 'SET-PROFILE',} as const)

export default ProfileReducer