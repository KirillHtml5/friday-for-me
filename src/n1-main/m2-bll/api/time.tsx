import React, {ChangeEvent, useCallback} from 'react';
import SuperButton from "../../m1-ui/common/c2-SuperButton/SuperButton";
import {loginApi} from "./api";
import SuperInputText from "../../m1-ui/common/c1-SuperInputText/SuperInputText";

const Time = () => {
const time=Date.now()
    const onClickHandler = useCallback(() => {
        loginApi.getTime()
            .then((res) => {
                    console.log('res', res.data)

                }
            )
            .catch((error) => {
                console.log('error', {...error})
                console.log('text', error.res ? error.res.data.errorText : error.message)

            })
    }, [])
    const onClickHandler2 = useCallback(() => {
        loginApi.postTime(time)
            .then((res) => {
                    console.log('res', res.data)

                }
            )
            .catch((error) => {
                console.log('error', {...error})
                console.log('text', error.res ? error.res.data.errorText : error.message)

            })
    }, [time])




    return (
        <div>
            {/*<SuperInputText onChange={onChangeHandler}/>*/}
            <SuperButton onClick={onClickHandler2}>time</SuperButton>
        </div>
    );
};

export default Time;