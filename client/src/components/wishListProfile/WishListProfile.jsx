import React from 'react'
import { useSelector } from 'react-redux'
import WishesProfile from '../wishesProfile/WishesProfile'
import "./wishListProfile.css"

function WishListProfile({wishes, user}){
    
    const products = useSelector(state => state.products)
    const wish = useSelector(state => state.wishList)
    
    const productWish = []

    for(let i = 0; i < wishes.length; i++){
        for(let j = 0; j < products.length; j++){
           if(wishes[i] === products[j]._id){
             productWish.push(products[j])
           } 
        }
    }

    return (
        <>
            <div className="containerWishList">
                <h1 className="tittleWish"> Wish List</h1>
                <div className="wishesContainer">
                    <div className="wishes"> 
                    {productWish.map(products => {
                      return  <WishesProfile wishes={products} user={user}/>
                    })}  
                    </div>
                    <div className="totalWishes">
                        <p> Total Wishes: {wish.length} </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default WishListProfile
