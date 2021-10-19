import React from "react";
import './product.css';
import { NavLink } from "react-router-dom"; 
import Rating from '../Rating/Rating';
import { BsFillEyeFill, BsFillCartFill } from 'react-icons/bs';

export default function Product({ _id, img, name, price, rating, isActive }) {

    console.log(isActive)

    return (
        <>
                <div className="product-card">
                    <div className="badge">New</div>
                    <div className="product-tumb">
                        <img src={img} alt=""/>
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">MUSIC</span>
                        <NavLink className="link-product" to={'detail/' + _id}>
                        <h4><a href="">{name}</a></h4>
                        </NavLink>
                        <p><Rating rating={9}/></p>
                        <div className="product-bottom-details">
                            <div className="product-price"><small>$ {price + 200 }</small>$ {price}</div>
                            <NavLink className="link-product" to={'detail/' + _id}>
                            <div className="product-links">
                                <a href=""><BsFillEyeFill/></a>
                                <a href=""><BsFillCartFill/></a>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
        </>
    )
}