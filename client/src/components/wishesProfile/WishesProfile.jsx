import React from 'react'
import ButtonFav from '../wishBtn/ButtonFav'
import './wishesProfile.css'

export default function WishesProfile ({name, price, image, _id, user}) {
    return (
        <div className="itemWishContainer">
            
            <div className="imgWish">
                
                <img src={image} alt={"yourWishItem"}/>
            </div>

            <div className="infoContainer">
                <div className="infoOfProducts">
                        <div className="tittle">
                            <h2>"nombre"</h2>
                        </div>

                        <div className="priceItem">
                            <p>$2000</p>
                        </div>

                        <div className="btnWish">
                            <ButtonFav id={_id} user={user}/>
                        </div>
                </div>
            </div>
        </div>
    )
}
