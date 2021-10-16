import './addtocart.css';
import { useDispatch } from "react-redux"
import { addCart } from '../../redux/actions';


export default function({ id }) {

  const dispatch = useDispatch()

  const handleCart = (e) => {
    e.preventDefault()
   // ES POR ID, NAME SOLO POR PRUEBA
    console.log('NAMEEEEEEE', id)
    dispatch(addCart(id)) 
  }

  return(
    <div className='cartBtns'>

      <span className='lbl' onClick={(e) => {handleCart(e)}}>Add to cart</span>
      <div className='btns'>
        <span className='remove'>-</span>
        <span className='quantity'>0</span>
        <span className='add'>+</span>
      </div>
    </div>
  );
}
