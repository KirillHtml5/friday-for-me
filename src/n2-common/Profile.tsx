import React from 'react'
import {useSelector} from "react-redux";
import { ReduxRootType } from '../n1-main/m2-bll/store/ReduxStore';


const Profile = () => {
    const userName=useSelector<ReduxRootType>((store)=>store.profile)
    console.log('user',userName)
    return <div>
        <h2>PROFILE</h2>

    </div>
}

export default Profile