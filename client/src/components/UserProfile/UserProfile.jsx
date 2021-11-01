import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import ReactModal from "react-modal";
import { FaRegEdit } from 'react-icons/fa';
import Loader from "../Loader/Loader";
import { getMyOrders, getWishlist, searchUserInDb } from "../../redux/actions";
import HistoryCard from "../historyCartCard/historyCard"
import { FiArchive } from "react-icons/fi";
import './UserProfile.css'
import EditUserForm from "../EditUserForm/EditUserForm";
import WishListProfile from "../wishListProfile/WishListProfile";

export default function UserProfile() {

    const dispatch = useDispatch()

    const { user, isAuthenticated, isLoading } = useAuth0()
    const userProfile = useSelector(state => state.user)

    const orders = useSelector(state => state.orders)
    const wishes = useSelector(state => state.wishList)
    

    const [toggle, setToggle] = useState(false)
    const [toggleOrder, setToggleOrder] = useState(false)
    

    const [showPopupEditUser, setShowPopupEditUser] = useState(false)

    function toggleModal() {
        setShowPopupEditUser(!showPopupEditUser)
    }

    useEffect(() => {
        setToggle(false)
        if (user?.email) {
            dispatch(getMyOrders(user.email))
            dispatch(getWishlist(user.email))
        }
    }, [user])

    useEffect(() => {
        if (user?.email) {
            dispatch(searchUserInDb(user.email))
        }
    }, [user])


    if (isLoading) {
        return (
            <Loader />
        )
    }

// --- HandlersToggle
    const handleOrders = (e) => {
        e.preventDefault()
        setToggleOrder(!toggleOrder)
        setToggle(!toggle)   
    }

    const handleWish = (e) => {
        setToggleOrder(false)
        setToggle(!toggle)
    }

    const handleToggle = (e) => {
        setToggle(!toggle)
    }

    // console.log(userProfile.user[0]._id, 'userProfile.user[0]._id')
    if (isAuthenticated) {
        return (
            <div>

                {toggle ?
                toggleOrder ?
                    <div className="historyContainer">
                        <div className="soyH1" onClick={(e) => { handleToggle(e) }}>{"back"} </div>
                        <div className="">
                            <HistoryCard order={orders} />
                        </div>
                    </div>
                    :
                    <div className="favContainer">
                        <div className="soyH1" onClick={(e) => { handleToggle(e) }}>{"back"} </div>
                        <div className="">
                            <WishListProfile wishes={wishes} user={user?.email}/>
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

                            {userProfile.user ?
                                <div className='userName'>
                                    <button className='userBtnTopRight' onClick={toggleModal}><FaRegEdit className='editIcon' />Edit</button>
                                    <p>First Name: {userProfile.user[0]?.firstName}</p>
                                    <p>Last Name: {userProfile.user[0]?.lastName}</p>
                                    <p>Gender: {userProfile.user[0]?.gender}</p>
                                    <p>Nationality: {userProfile.user[0]?.nationality}</p>
                                    <p>Birthdate: {userProfile.user[0]?.birthDate}</p>
                                    <p>Address: {userProfile.user[0]?.address}</p>
                                </div>
                                : null}

                            <div className='userInfo'>
                                <h2>Your Orders</h2>
                            </div>

                            <div className='userNameOrder'>
                                <button className="btnOrders" onClick={(e) => { handleOrders(e) }}><FiArchive /></button>
                                <button className="btnWish" onClick={(e) => { handleWish(e) }}>Wishes</button>
                            </div>
                        </div>

                        <ReactModal isOpen={showPopupEditUser} className='reactModalContent' overlayClassName='reactModalOverlay'>
                            <EditUserForm _id={userProfile.user ? userProfile.user[0]?._id : null} handleClosePopUp={toggleModal} />
                        </ReactModal>

                    </div>


                }

            </div >
        )
    }
}