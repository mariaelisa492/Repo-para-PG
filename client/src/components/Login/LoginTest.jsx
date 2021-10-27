import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import './LoginTest.css'
//import {searchUserInDb} from '../../redux/actions/index'

export function LoginTest(){

    const {loginWithRedirect} = useAuth0()

    return(
        <span className='loginBtn' onClick={ ()=> loginWithRedirect()}>Login</span>
    );
}
