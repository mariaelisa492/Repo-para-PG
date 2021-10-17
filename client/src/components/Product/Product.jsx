import React from "react";
import './product.css';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

export default function Product({ _id, img, name, price, rating, isActive }) {

    console.log(isActive)

    return (
        <>
            
                <div class="product-card">
                    <div class="badge">New</div>
                    <div class="product-tumb">
                        <img src={img} alt=""/>
                    </div>
                    <div class="product-details">
                        <span class="product-catagory">MUSIC</span>
                        <h4><a href="">{name}</a></h4>
                        <p><Rating rating={9}/></p>
                        <div class="product-bottom-details">
                            <div class="product-price"><small>$96.00</small>$ {price}</div>
                            <Link className="link-product" to={'detail/' + _id}>
                            <div class="product-links">
                                <a href=""><i class="fas fa-eye"></i></a>
                                <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </>
    )
}