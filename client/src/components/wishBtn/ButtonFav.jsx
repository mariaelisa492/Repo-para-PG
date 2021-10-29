import './button.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleWishList } from '../../redux/actions';
import { FaHeart } from 'react-icons/fa';


export default function({ id, user }) {

  const dispatch = useDispatch()
  
  const wish = useSelector(state => state.wishList)
  const [state, setState] = useState({wish: wish.includes(id)})

  useEffect(() => {
    setState({wish: wish.includes(id)})
    console.log('!!!!!! Soy Effect', wish)
  }, [wish])
  


  const handleWish = (e) => {
    e.preventDefault()
    dispatch(toggleWishList({
      email: user, 
      productId: id
    }))
  }
 
  return(
    <div className='fav-button-item'>
      <b className={state.wish? "wishListTrue" : "wishListFalse"} onClick={e => handleWish(e)}><FaHeart /></b>
    </div>
  );
}
