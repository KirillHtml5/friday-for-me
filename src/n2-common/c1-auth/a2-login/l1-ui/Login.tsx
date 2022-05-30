import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {setLoginTC} from "../l2-bll/Login-reducer";
import {ReduxRootType} from "../../../../n1-main/m2-bll/store/ReduxStore";
import {Navigate} from "react-router-dom";

const Login = () => {
    const {isLoggedIn} = useSelector((store: ReduxRootType) => store.login)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [remember, setRemember] = useState<boolean>(false)

    const dispatch = useDispatch()

    console.log(isLoggedIn)

    const logINButton = () => {
        return dispatch(setLoginTC(email, password, remember));
    }


    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onchangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return <div>
        <h2>LOGIN</h2>
        <div>
            Login
            <SuperInputText value={email} onChange={onchangeHandler}/>
        </div>
        <div>
            <SuperInputText value={password} onChange={onchangeHandler2}/>
        </div>
        <div>
            <SuperCheckbox checked={remember} onChangeChecked={setRemember}>remember me</SuperCheckbox>
        </div>
        <div>
            <SuperButton onClick={logINButton}>log in</SuperButton>
        </div>
    </div>
}

export default Login