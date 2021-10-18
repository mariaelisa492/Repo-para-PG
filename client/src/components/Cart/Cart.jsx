import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import ItemCart from '../itemCart/itemCart'
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
            priceCart += item.price
        })

        setTotalItems(itemCarts)
        setTotalPrice(priceCart)
    }, [items, totalItems, totalPrice])

    console.log('ITEMS CARTTTTTTTTDECARTTTTTTT', items)
    

    return (
        <div className='Cart'>
            <div className='conteinerCart'>
            
                <div className='navBar'>
                    <h1 className='Logo'>HOME</h1>
                    <strong><h2>CART</h2></strong>
                </div>

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
                    </div>
                </div>
            
            </div>
        </div>
    )
}


