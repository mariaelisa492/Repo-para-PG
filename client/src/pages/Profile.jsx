import React from 'react'
import UserProfile from '../components/UserProfile/UserProfile'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import "./Profile.css"


export const Profile = () => {
    return (
        <div className="page-shopping">
            <div className="nav_page_user">
                <NavBar />
            </div>
            <div className="user_page_container">
                <UserProfile/>
            </div>
            <div className="footer_page_user">
                <Footer/>
            </div>
        </div>
    )
}
