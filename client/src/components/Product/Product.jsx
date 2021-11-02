import React, { useState } from "react";
import './product.css';
import { Link, NavLink } from "react-router-dom";
import Rating from '../Rating/Rating';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa'
import { addCart } from '../../redux/actions';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

export default function Product({ _id, img, name, price, reviews, isActive, stock, created }) {
 console.log(created, "soy created")
    const today = new Date()
    console.log(today,"soy todaay")

    const totalRating = reviews?.map(review => review.rating).reduce((a, b) => a + b, 0)/ reviews?.length;
    const ratingDefault = totalRating > 0 ? totalRating : 5;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch()

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
                }
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
                        <h4><a href="">{name}</a></h4>
                    </NavLink>
                    <p><Rating rating={ratingDefault} /></p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small>$ {price + 200}</small>$ {price}</div>
                        <div className="product-links">
                        <a className="button-items-delete" onClick={(e) => { handleAddCart(e) }}><FaCartPlus /></a>
                            <NavLink className="link-product" to={'detail/' + _id}>
                                <a href=""><BsHeartFill /></a>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}