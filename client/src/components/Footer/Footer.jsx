import React, { useEffect } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import "./Footer.css"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useAuth0} from '@auth0/auth0-react';
import { searchUserInDb } from "../../redux/actions";


function Footer() {

    const {user} = useAuth0();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchUserInDb(user?.email));
    }, [user]);
    const U = useSelector(state => state.user);
   
    return (
        <footer className="footer">
            <div className="containerF">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul className="list-services">
                            <li><a href="/about">about us</a></li>
                            <li><a href="/home">our services</a></li>
                            { U.user ? U.user[0]?.role === 'ROLE_ADMIN' ? <li><NavLink className='AdminPanelLink' to='/admin'>Admin panel</NavLink></li> : null : null}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul className="list-services">
                            <li><a href="/home">FAQ</a></li>
                            <li><a href="/home">shipping</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul className="list-services">
                            <h4>contact us</h4>
                            <li><a href="mailto:wavemusic@gmail.com" target="_blank">E-mail</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/Wave-Music-107797495029344/" target="_blank"><RiFacebookCircleFill size={42} /></a>
                            <a href="https://www.twitter.com/" target="_blank"><AiFillTwitterCircle size={42} /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><TiSocialLinkedin size={38} className="linkedin-icon" /></a>
                            <a href="https://www.github.com/" target="_blank"><AiFillGithub size={42} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
};

export default Footer;