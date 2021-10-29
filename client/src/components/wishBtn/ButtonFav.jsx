import './button.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToWishList, deleteWishItem, getWishlist } from '../../redux/actions';
import { FaHeart } from 'react-icons/fa';


export default function({ id, user }) {

  const dispatch = useDispatch()
  
  /* const [wish, setWish] = useState() */

  const wish = useSelector(state => state.wishList)

  const handleWish = (e) => {
    e.preventDefault()

    if(!wish.includes(id)){
      dispatch(addToWishList({
        email: user,
        productId: id
      }))

      dispatch(getWishlist(user))
      console.log('!!!!!!!! ADDDDDDDDD WISH', wish )
    } else {
      dispatch(deleteWishItem( id ,user))

      dispatch(getWishlist(user))
      console.log('!!!!!!!! deLETE WISH', wish )
    }
  }
 
  return(
    <div className='fav-button-item'>
      <b className={wish.includes(id)? "wishListTrue" : "wishListFalse"} onClick={e => handleWish(e)}><FaHeart /></b>
    </div>
  );
}
