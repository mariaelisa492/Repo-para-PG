import React from 'react'
import "../components/Login/Login.css"
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
           <div className="body">
    <div className="login-container">
        <p className="title">Login</p>
        <form className="login-form">
            <div className="form-control">
                <input type="text" placeholder="Username" />
                <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" />
                <i className="fas fa-lock"></i>
                <p className="forgot-password">Forgot Password?</p>
            </div>

            <button className="submit">Login</button>
        </form>

        <div className="social-login">
            <label>Or login with</label>
            <div className="social-container">
                <button>
                    <i className="fab fa-facebook-f"></i>
                </button>
                <button>
                    <i className="fab fa-google"></i>
                </button>
                <button>
                    <i className="fab fa-linkedin-in"></i>
                </button>
            </div>
        </div>

        <div className="additional-action">
            <p>Not an account? Sign in</p>
            <Link to="/home" >Home </Link>
        </div>
    </div>    
</div>
        </div>
    )
}