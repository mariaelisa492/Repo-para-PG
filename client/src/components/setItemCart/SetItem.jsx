import './setItem.css';
import { useDispatch } from "react-redux"
import { addCart, removeCart, removeItem } from '../../redux/actions';


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
    <div className='setItemsBtn'>
      <div className='btns'>
        <span className='Remove' onClick={(e) => {handleRemoveCart(e)}}>-</span>
        <span className='qty'>{qty}</span>
        <span className='Add'onClick={(e) => {handleAddCart(e)}}>+</span>
      </div>
    </div>
  );
}
