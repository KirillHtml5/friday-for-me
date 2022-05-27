import {combineReducers, legacy_createStore} from "redux";
import LoginReducer from "../reducers/Login-reducer";
import NewPasswordReducer from "../reducers/New-Password-reducer";
import ProfileReducer from "../reducers/Profile-reducer";
import RegistrationReducer from "../reducers/Registration-reducer";
import RecoveryReducer from "../reducers/Recovery-reducer";

let rootReducer = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    profile: ProfileReducer,
    recoveryPassword: RecoveryReducer,
    newPassword: NewPasswordReducer

})

let store = legacy_createStore(rootReducer)


export type ReduxStoreType = typeof store
export type ReduxRootType = ReturnType<typeof rootReducer>

export default store

