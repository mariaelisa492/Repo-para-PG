import React, {useEffect, useState} from 'react'
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
        <div className='Cart'>
                 <NavBar/>
            <div className='conteinerCart'>
                <div className='cartOptions'>

                    <div className='itemsCart'>
                        {items.map((item) => {
                           return <ItemCart item={item} />
                        })}
                    </div>

                    <div className='checkOutItems'>
                        <h4 className='titleCheck'>CheckOut</h4>
                        <div className='totalPrice'>
                            <span>TOTAL ITEMS: {totalItems}</span>
                            <span> Total Price: ${totalPrice}</span>
                        </div>
                        <div>
                            <CheckoutBut  totalPrice={totalPrice} items={items}/>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}


