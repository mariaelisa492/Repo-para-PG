import React from 'react'
import { useSelector } from 'react-redux'
import WishesProfile from '../wishesProfile/WishesProfile'

function WishListProfile({wishes}){
    
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
                <h1> Your Wish List</h1>
                <div className="wishesContainer">
                    <div className="wishes"> 
                        <WishesProfile wishes={wishes}/>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default WishListProfile
