import './setItem.css';
import { useDispatch } from "react-redux"
import { addCart, removeCart, removeItem } from '../../redux/actions';
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"


export default function({ id, qty }) {

  const dispatch = useDispatch()

  const handleAddCart = (e) => {
    e.preventDefault()
    dispatch(addCart(id)) 
  }

  const handleRemoveCart = (e) => {
    e.preventDefault()
    if(qty === 1){
      dispatch(removeItem(id))
    } else if(qty > 0 ) {
      dispatch(removeCart(id)) 
    }
  }

  return(
    <div className='add-button-item'>
        <button className='Remove-item' onClick={(e) => {handleRemoveCart(e)}}><AiFillMinusCircle/></button>
        <span className='qty'>{qty}</span>
        <button className='Add-item'onClick={(e) => {handleAddCart(e)}}><AiFillPlusCircle/></button>
    </div>
  );
}
