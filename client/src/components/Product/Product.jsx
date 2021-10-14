import React from "react";
import './product.css'
export const Product = ({img, name, price, rating, isActive}) => {
    
    console.log(isActive)

    return (
        <div className='product'>
            <img src={img}/>
            <h4>{name}</h4>
            <p>${price}</p>
            <p>{rating}</p>
        </div>

    )
}