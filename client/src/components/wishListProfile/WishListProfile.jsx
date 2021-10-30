import React from 'react'
import { useSelector } from 'react-redux'
import WishesProfile from '../wishesProfile/WishesProfile'
import "./wishListProfile.css"

function WishListProfile({wishes, user}){
    
    const products = useSelector(state => state.products)
    
    const productWish = []

    for(let i = 0; i < wishes.length; i++){
        for(let j = 0; j < products.length; j++){
           if(wishes[i] === products[j]._id){
             productWish.push(products[j])
           } 
        }
    }


    console.log('!!!!!!!!!!!! SOY PRODUCTS', productWish)
    console.log('!!!!!!!!!!!! SOY WISHES', wishes)

    return (
        <>
            <div className="containerWishList">
                <h1 className="tittleWish"> Wish List</h1>
                <div className="wishesContainer">
                    <div className="wishes"> 
                        <WishesProfile wishes={productWish} user={user}/>
                        <WishesProfile wishes={productWish} user={user}/>
                        <WishesProfile wishes={productWish} user={user}/>
                    </div>
                    <div className="totalWishes">
                        <p> total Wishes: </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default WishListProfile
