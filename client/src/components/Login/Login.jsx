import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ImLinkedin2 } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";

export default function Login(){
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

                            <input type="text" placeholder="Username" />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">

                            <div className="icons" >
                                < RiLockPasswordFill />
                            </ div>

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