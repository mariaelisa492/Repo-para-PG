import React from 'react'
import { useSelector } from 'react-redux'
import "./cart.css"

export default function Cart() {
    
    const itemsCart = useSelector(state => state.cart)
    console.log('ITEMS CARTTTTTTTT', itemsCart)
    const {image, name, price, qty} = itemsCart[0] ? itemsCart[0] : {}
    console.log('IMAGEEEEEEEEE', image)

    return (
        <div>
            <h1>HELLO</h1>
            <img src={image}></img>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{qty}</h1>
        </div>
    )
}


