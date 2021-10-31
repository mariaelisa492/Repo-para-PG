import React from "react";
import { removeItem } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import SetItem from "../setItemCart/SetItem";
import {AiTwotoneDelete} from "react-icons/ai"
import './itemCart.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


export default function ItemCart({ item }) {
  console.log("ITEMS DEL CARRITOOOOOO", item);
  const { _id, image, name, price, qty } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = (e) => {
    e.preventDefault();
    dispatch(removeItem(_id));
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
      icon: 'warning',
      title: 'The product was removed from the cart!'
  })
  };

  return (
    <div className="item-container">
      
      <div>
        <img className="itemCartImg" src={image} alt={"imagen de producto"} />
      </div>
    
        <div className="info-item">
          <Link to={'detail/' + _id}><h3 className="itemName">{name}</h3></Link>
          <h4 style={{color:'#838996'}}>Price $ {price}</h4>              
        </div>
        
        <div className="actions-items">
          <div>
            <SetItem id={_id} qty={qty} />
          </div>
          <div>
            <span className ="button-items-delete" onClick={(e) => { handleRemoveItem(e) }}><AiTwotoneDelete/><h6>Delete</h6></span>
          </div>
        </div>
    </div>
  );
}
