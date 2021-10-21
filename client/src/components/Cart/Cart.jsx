import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCart from '../itemCart/itemCart';
import CheckoutBut from '../Paypal/PayPal';
import {BsFillCartXFill} from "react-icons/bs"
import {Link} from "react-router-dom"
import "./cart.css"
import { useAuth0 } from '@auth0/auth0-react'

export default function Cart() {
    const { user } = useAuth0()
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    console.log('EMAILLLLLLLLLLLLLL', user.email)
    
    const items = useSelector(state => state.cart)

    useEffect(() => {
        let itemCarts = 0;
        let priceCart = 0;

        items.forEach(item => {
            itemCarts += item.qty
            priceCart += item.price * item.qty
        })

        setTotalItems(itemCarts)
        setTotalPrice(priceCart)
    }, [items, totalItems, totalPrice])

    console.log('ITEMS CARTTTTTTTTDECARTTTTTTT', items)


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
                                <div><strong>TOTAL: $ {totalPrice}</strong> </div>
                            </div>
                            <div>
                            <CheckoutBut  totalPrice={totalPrice} items={items} user={user.email} totalItems={totalItems}/>
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
                            <Link to="/">
                                <h3>
                                ¡Keep Shopping!
                                </h3>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    )
}


