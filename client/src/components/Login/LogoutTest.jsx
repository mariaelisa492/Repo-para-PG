import React, { useEffect }  from "react";
import {useAuth0} from '@auth0/auth0-react'
import './LogoutTest.css'
import { useSelector } from "react-redux";
import {LOCALHOST_URL} from '../../redux/constants/index'
import axios from 'axios'

export function Logout(){
    const {logout, user, isAuthenticated} = useAuth0()

    function createUser(){
        axios.post(`${LOCALHOST_URL}/users/signup`, {email: user.email, username: user.nickname} )
        console.log("ACA DEBERIA APARECER EL CREATE USER")
     }

     useEffect(() => {
       createUser()
       localStorage.removeItem('items')
      }, [])
    

    const userDB = useSelector((state)=> state.user)

    // console.log(user, 'UserAuth0')
    // console.log(userDB, 'UserDB')

    if(isAuthenticated )
    return(
        <span className='logoutBtn' onClick={() => logout({returnTo:window.location.origin})}>Logout</span>
    );
}
