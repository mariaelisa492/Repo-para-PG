import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import './LogoutTest.css'
import { useSelector } from "react-redux";
import { LOCALHOST_URL } from '../../redux/constants/index'
import axios from 'axios'

export function Logout() {
    const { logout, user, isAuthenticated } = useAuth0()



    const hadleChangeLogout = () => {
        localStorage.removeItem('items');
        logout({ returnTo: window.location.origin })
    }

    if (isAuthenticated)
        return (
            <span className='logoutBtn' onClick={hadleChangeLogout}>Logout</span>
        );
}
