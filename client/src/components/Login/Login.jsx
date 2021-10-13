import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ImLinkedin2 } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";


export default function Login() {

    const [input, setInput] = useState({
        user: ''
    });
    const [error, setError] = useState('');

    function validateEmail(value) {
        var emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(value)) {
            setError('El usuario debe ser un email');
        } else {
            setError('')
        }
    }

    function handleChange(e) {
        const { value, name } = e.target;

        if (name === 'user') {
            validateEmail(input.user)
        }
        setInput({
            ...input,
            [name]: value
        });
    }

    return (
        <div>
            <div className="body">
                <div className="login-container">
                    <p className="title">Login</p>

                    <form className="login-form">
                        <div className="form-control">

                            <div className="icons" >
                                < BsFillPeopleFill />
                            </div>

                            <input type="text" name="user" required value={input.user} onChange={handleChange} placeholder="Username" />
                            {!error ? null : <div className="error" >{error}</div>}
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">

                            <div className="icons" >
                                < RiLockPasswordFill />
                            </ div>

                            <input type="password" required placeholder="Password" />
                            <i className="fas fa-lock"></i>
                            <p className="forgot-password">Forgot Password?</p>
                        </div>

                        <button type="submit" className="submit">Login</button>
                    </form>

                    <div className="social-login">
                        <label>Or login with</label>
                        <div className="social-container">

                            <button>
                                <FaFacebook size={28} />
                            </button>
                            <button>
                                <FcGoogle size={28} />
                            </button>
                            <button>
                                < ImLinkedin2 size={28} />
                            </button>
                        </div>
                    </div>

                    <div className="additional-action">
                        <p>Not an account? Sign up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}