import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import './LogoutTest.css'

export function Logout(){
    const {logout} = useAuth0()

    return(
        <button className='logoutBtn' onClick={() => logout({returnTo:window.location.origin})}>Logout</button>
    )
}