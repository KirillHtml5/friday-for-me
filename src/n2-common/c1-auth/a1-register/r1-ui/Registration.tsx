import React, {ChangeEvent, useCallback, useState} from 'react'
import {authRegisterApi, timeApi} from "../../../../n1-main/m2-bll/api/api";
import SuperInputText from "../../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";


const Registration = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    // const [password2, setPassword2]=useState('')

    const signUpCallback = useCallback(() => {
        authRegisterApi.register(email, password)
            .then((res) => {
                console.log('res.data', res.data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }, [email, password])
    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onchangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return <div>
        <h2>REGISTRATION</h2>
        <hr />
        <div>
            <SuperInputText value={email} onChange={onchangeHandler}/>
        </div>
        <div>
            <SuperInputText value={password} onChange={onchangeHandler2}/>
        </div>
        <div>
            <SuperButton onClick={signUpCallback}>signUp</SuperButton>
        </div>
        <hr />

    </div>
}

export default Registration