import React from "react";
import { removeItem } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import SetItem from "../setItemCart/SetItem";
import {AiTwotoneDelete} from "react-icons/ai"
import './itemCart.css'

export default function ItemCart({ item }) {
  console.log("ITEMS DEL CARRITOOOOOO", item);
  const { _id, image, name, price, qty } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = (e) => {
    e.preventDefault();
    dispatch(removeItem(_id));
  };

  return (
    <div className="item-container">
      
      <div>
        <img className="itemCartImg" src={image} alt={"imagen de producto"} />
      </div>
    
        <div className="info-item">
          <h3 className="itemName">{name}</h3>
          <h4 className="itemPrice">Price $ {price}</h4>
        </div>
        
        <div className="actions-items">
          <div>
            <SetItem id={_id} qty={qty} />
          </div>
          <div>
            <button className ="button-items-delete" onClick={(e) => { handleRemoveItem(e) }}><AiTwotoneDelete/><h6>Delete</h6></button>
          </div>
        </div>
    </div>
  );
}
