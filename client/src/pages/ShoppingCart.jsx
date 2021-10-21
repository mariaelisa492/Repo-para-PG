import React from 'react'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import "./shoppingCart.css"


export const ShoppingCart = () => {
    return (
        <div className="page-shopping">
            <div className="nav_page_cart">
                <NavBar />
            </div>
            <div className="cart_page_container">
                <Cart/>
            </div>
            <div className="footer_page_cart">
                <Footer/>
            </div>
        </div>
    )
}
