import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemCart from '../itemCart/itemCart'
import NavBar from '../NavBar/NavBar'
import CheckoutBut from '../Paypal/PayPal'
import "./cart.css"

export default function Cart() {

    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

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
                                <CheckoutBut totalPrice={totalPrice} items={items} />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div>
                            <h1>
                            Shopping cart empty
                            </h1>
                        </div>
                    </div>
            }
        </div>
    )
}


