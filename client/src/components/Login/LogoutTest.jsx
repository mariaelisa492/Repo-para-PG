import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import './LogoutTest.css'
import { useSelector } from "react-redux";

export function Logout(){
    const {logout, user, isAuthenticated} = useAuth0()

    const userDB = useSelector((state)=> state.user)

    console.log(user, 'UserAuth0')
    console.log(userDB, 'UserDB')

    if(isAuthenticated )
    return(
        <button className='logoutBtn' onClick={() => logout({returnTo:window.location.origin})}>Logout</button>
    )
}