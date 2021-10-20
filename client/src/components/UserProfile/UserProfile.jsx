import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import { FaAngleRight } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './UserProfile.css'

export function UserProfile() {
    const { user, isAuthenticated, isLoading } = useAuth0()

    console.log(user, 'User')


    if (isLoading) {
        return (
            <p>LOADING...</p>
        )
    }

    if (isAuthenticated) {
        return (

            <div>
                <NavBar />
                <div className='containerUserProfile'>

                    <div className='userProfileContainer'>
                        <div className='userImageContainer'>
                            <img src={user.picture} alt={user.name} className='image' />
                        </div>
                        <div className='userInfo'>
                            <h1>My profile</h1>
                        </div>
                        <div className='userInfo'>
                            <h2>User details</h2>
                        </div>
                        <div className='userName'>
                            <p >User: {user.nickname}</p>
                            <p  >E-mail: {user.email}</p>
                        </div>

                        <div className='userInfo'>
                            <h2>Personal Information</h2>
                        </div>

                        <div className='userName'>
                            <p>First name: {user.given_name}</p>
                            <p>Last name: {user.family_name}</p>
                            <p>Phone: 1154710880</p>
                            <p>ID: 36395664</p>
                        </div>

                        <div className='userInfo'>
                            <h2>Shipping Adresses</h2>
                        </div>

                        <div className='userName'>
                            <p className='userData'>Dean Funes 152, Bernal, 1876, Argentina<FaAngleRight /></p>
                            <p className='userData'>Alvear 654, Quilmes, 1878, Argentina <FaAngleRight /></p>
                        </div>

                        <div className='userInfo'>
                            <h2>Cards</h2>
                        </div>

                        <div className='userName'>
                            <div className='cardContainer'>
                                <img src="https://pbs.twimg.com/profile_images/1417870168626274305/SQh0W_dC_400x400.jpg" className="imgCard" />
                                <p className='userData'>Visa 5472</p>
                            </div>
                            <div className='cardContainer'>
                                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png" className="imgCard" />
                                <p className='userData'>Master Card 8910</p>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}