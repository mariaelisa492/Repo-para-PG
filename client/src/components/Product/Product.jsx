import React, { useState, useEffect } from "react";
import './product.css';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import Rating from '../Rating/Rating';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa'
import { addCart } from '../../redux/actions';
import { useDispatch } from "react-redux";
import { toggleWishList } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react'
import Swal from 'sweetalert2'

export default function Product({ _id, img, name, price, reviews, isActive, stock, created }) {
 console.log(created, "soy created")
    const today = new Date()
    console.log(today,"soy todaay")

    const {user, isAuthenticated, loginWithRedirect} = useAuth0()
    const wish = useSelector(state => state.wishList)
    const [state, setState] = useState({wish: wish.includes(_id)})

    useEffect(() => {
        setState({wish: wish.includes(_id)})
    }, [wish])

    const totalRating = reviews?.map(review => review.rating).reduce((a, b) => a + b, 0)/ reviews?.length;
    const ratingDefault = totalRating > 0 ? totalRating : 5;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch()

    const handleWish = (e) => {
        if(!isAuthenticated){
            loginWithRedirect()
        }else{
            e.preventDefault()
            dispatch(toggleWishList({
                email: user.email, 
                productId: _id
            }))
        }
    }

    const handleAddCart = (e) => {
        e.preventDefault()
        if (count < stock) {
            setCount(count + 1);
            dispatch(addCart(_id))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 800,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                /* customClass: {
                    container: 'sweet-alert'
                } */
            })

            Toast.fire({
                icon: 'success',
                title: 'The product was added to the cart!'
            })
        }
    }


//show a div if created is 15 days less than today.
    const showDiv = () => {
        if (created) {
            const createdDate = new Date(created)
            const diff = Math.abs(today - createdDate)
            const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
            console.log(diffDays, "soy diffDays")
            if (diffDays <= 15) {
                return (
                    <div className="badge">New</div>
                )
            }
        }
    }


    return (
        <>
            <div className="product-card">
                <div >{showDiv()}</div>
                <Link to={'detail/' + _id}>
                    <div className="product-tumb">
                        <img src={img} alt="" />
                    </div>
                </Link>
                <div className="product-details">
                    <span className="product-catagory">MUSIC</span>
                    <NavLink className="link-product" to={'detail/' + _id}>
                        <h4>{name}</h4>
                    </NavLink>
                    <p><Rating rating={ratingDefault} /></p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small>$ {price + 200}</small>$ {price}</div>
                        <div className="product-links">
                        <span className="button-items-delete" onClick={(e) => { handleAddCart(e) }}><FaCartPlus /></span>
                        <span className={state.wish? "wishListTrue" : ""} onClick={e => handleWish(e)}><BsHeartFill /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}