import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <Link to={'/home'}>
            Soy el Login
            </Link>
        </div>
    )
}