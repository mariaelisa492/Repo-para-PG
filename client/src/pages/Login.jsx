import React from "react";
import Login from "../components/Login/Login.jsx"
import {Link} from 'react-router-dom'

export default function LoginRender() {
    return (
        <div>
            <Link to="/home">
                <h1>Soy login!!!!!!!</h1>
            </Link>
        </div>
    )
};