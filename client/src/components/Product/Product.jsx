import React from "react";
import './product.css';
import { Link, NavLink } from "react-router-dom"; 
import Rating from '../Rating/Rating';
import { BsFillEyeFill} from 'react-icons/bs';
import {AiTwotoneHeart} from 'react-icons/ai'
import { addProductFav } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Product({ _id, img, name, price, rating, isActive }) {
    const dispatch = useDispatch();

    const objFav = {_id, name, img, price}

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
                            
                            <div className="product-links">
                            <NavLink className="link-product" to={'detail/' + _id}>
                                <a href=""><BsFillEyeFill/></a>
                                </NavLink>
                                <a className='buttonfav' onClick={()=>dispatch(addProductFav(objFav))}><AiTwotoneHeart/></a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}