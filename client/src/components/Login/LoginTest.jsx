import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import './LoginTest.css'
import {useDispatch} from 'react-redux'
import {searchUserInDb} from '../../redux/actions/index'

export function LoginTest(){

    const dispatch = useDispatch()
    const {loginWithRedirect} = useAuth0()

    return(
        <button className='loginBtn' onClick={() => loginWithRedirect().then(e => console.log(e, 'lo que trae el login'))}>Login</button>
    )
}