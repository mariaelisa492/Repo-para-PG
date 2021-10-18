import './addtocart.css';
import { useDispatch } from "react-redux"
import { addCart, removeCart } from '../../redux/actions';


export default function({ id, qty }) {

  const dispatch = useDispatch()

  const handleAddCart = (e) => {
    e.preventDefault()
   // ES POR ID, NAME SOLO POR PRUEBA
    console.log('NAMEEEEEEE', id)
    dispatch(addCart(id)) 
  }

  const handleRemoveCart = (e) => {
    e.preventDefault()
    dispatch(removeCart(id)) 
  }

  return(
    <div className='cartBtns'>

      <span className='lbl' onClick={(e) => {handleAddCart(e)}}>Add to cart</span>
      <div className='btns'>
        <span className='remove' onClick={(e) => {handleRemoveCart(e)}}>-</span>
        <span className='quantity'>{qty}</span>
        <span className='add'onClick={(e) => {handleAddCart(e)}}>+</span>
      </div>
    </div>
  );
}
