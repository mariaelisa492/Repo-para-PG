import './addtocart.css';
import { useDispatch } from "react-redux"
import { addCart, removeCart, removeItem } from '../../redux/actions';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function({ id, stock }) {

  const [count, setCount] = useState(0);

  const dispatch = useDispatch()

  const handleAddCart = (e) => {
    e.preventDefault()
    if(count < stock){
      setCount(count + 1);
      dispatch(addCart(id)) 
    }
  }

  const handleRemoveCart = (e) => {
    e.preventDefault()
    if(count === 1){
      dispatch(removeItem(id));
    }
    if(count > 0){
      setCount(count - 1);
      dispatch(removeCart(id));
    }
  }

  return(
    <div className='cartBtns'>
      <Link to={count !== 0 && `/cart`}><span className='lbl'>Buy now!</span></Link>
      <div className='btns'>
        <span className='remove' onClick={(e) => {handleRemoveCart(e)}}>-</span>
        <span className='quantity'>{count}</span>
        <span className='add'onClick={(e) => {handleAddCart(e)}}>+</span>
      </div>
    </div>
  );
}
