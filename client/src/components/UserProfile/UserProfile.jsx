import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import { LOCALHOST_URL } from "../../redux/constants";
import axios from 'axios'
import { FaAngleRight } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Loader from "../Loader/Loader";
import { getMyOrders} from "../../redux/actions";
import  HistoryCard  from "../historyCartCard/historyCard"
import './UserProfile.css'

export function UserProfile() {
    
    const dispatch = useDispatch()
    const { user, isAuthenticated, isLoading } = useAuth0()


    const orders = useSelector(state => state.orders)
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        if(user?.email){
            dispatch(getMyOrders(user.email))
        }
    }, [user])
    
  

        axios.get(`${LOCALHOST_URL}/users/user?email=${user?.email}`)
    
     

    if (isLoading) {
        return (
            <Loader/>
            )
        }

    console.log('!!!!!!!!!!!!!! SOY ORDERS', orders)
    
    const handleOrders = (e) => {
        e.preventDefault()
        dispatch(getMyOrders(user.email))
        setToggle(!toggle)
    }

    const handleToggle = (e) => {
        setToggle(!toggle)
    }




    if (isAuthenticated) {
        return (
           <div>
                <NavBar />
                
            {toggle ? 
            <div className="historyContainer">
                <h1 className="soyH1" onClick={(e) => {handleToggle(e)}}>Back to profile</h1>
                <div className="">
                    <HistoryCard order={orders}/>
                </div>
               
            </div> 
            : 
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

                        <div className='userInfo'>
                            <h2>Shipping Address</h2>
                        </div>

                
                        <div className='userInfo'>
                            <h2>Orders Hisotry</h2>
                        </div>

                        <div className='userName'>
                        <button onClick={(e) => {handleOrders(e)}}>X</button>
                        </div>
                    </div>
          
                </div> 
            } 
                <Footer />
            </div>
        )
    }
}