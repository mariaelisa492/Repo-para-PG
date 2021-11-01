import './setItem.css';
import { useDispatch } from "react-redux"
import { addCart, removeCart, removeItem } from '../../redux/actions';
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
import Swal from 'sweetalert2';

export default function({ id, qty, stock }) {

  const dispatch = useDispatch()

  const handleAddCart = (e) => {
    e.preventDefault()
    if(qty < stock){
      dispatch(addCart(id)) 
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'The product was added to the cart!'
    })
    }
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
