import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCart from '../itemCart/itemCart';
import CheckoutBut from '../Paypal/PayPal';
import {BsFillCartXFill} from "react-icons/bs"
import {Link, NavLink} from "react-router-dom"
import "./cart.css"
import { useAuth0 } from '@auth0/auth0-react'
import { LoginTest } from '../Login/LoginTest';

export default function Cart() {
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const {user, isAuthenticated, loginWithRedirect} = useAuth0()

    
    const items = useSelector(state => state.cart)

    const [showBuy, setShowBuy] = useState(false)

    useEffect(() => {
        let itemCarts = 0;
        let priceCart = 0;
        

        items.forEach(item => {
            itemCarts += item.qty
            priceCart += item.price * item.qty
        })

        setTotalItems(itemCarts)
        setTotalPrice(priceCart)
        localStorage.setItem('items', JSON.stringify(items));
    }, [items, totalItems, totalPrice])

const handleChangeBuyNow = () => {
    if(isAuthenticated){
        setShowBuy(true);
    }else{
        loginWithRedirect()
    }
}

    return (
        <div className="containerCart">
            <h1>Shopping Cart</h1>
            {
                items.length > 0 ?
                    <div className="items-cart">
                        <div className="item-cart-cart">
                            {items.map((item) => {
                                return <ItemCart item={item} />
                            })}
                        </div>
                        <div className='checkOut__total'>
                            <h2 className='titleCheck'>CheckOut</h2>
                            <div className='totalPrice'>
                                <div>Total Items: {totalItems}</div>
                                <div>TOTAL: $ {totalPrice}</div>
                            </div>
                            <div> 
                                    <button className={showBuy ? "button_none" : "button__checkoutTotal"} onClick={handleChangeBuyNow}>Buy Now</button>
                                    <div className={showBuy ? "showBuy" : "hiddenBuy"}><CheckoutBut  totalPrice={totalPrice} items={items} totalItems={totalItems}/></div> 
                            </div>
                        </div>
                    </div>
                    : <div className="div_no_cartItem">
                        
                        <div className="icon_cartEmpty">
                            <BsFillCartXFill/>
                        </div>
                        <div>
                            <h4>
                            Shopping cart empty
                            </h4>
                        </div>
                        <div>
                            <NavLink className="keepShopping" to="/">
                               
                                ¡Keep Shopping!
                                
                            </NavLink>
                        </div>
                    </div>
            }
        </div>
    )
}


