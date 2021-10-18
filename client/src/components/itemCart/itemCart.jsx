import React from "react";
import { removeItem } from "../../redux/actions/index";
import Addtocart from "../AddToCart/Addtocart";
import { useDispatch } from "react-redux";
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
    <div className="item">
      <div className="itemContainer">
        <img className="itemCartImg" src={image} alt={"imagen de producto"} />
        <div className="itemDetails">
          <p className="itemName">{name}</p>
          <p className="itemPrice">${price}</p>
        </div>
          <div className="cartActions">
              <Addtocart id={_id} qty={qty} />
            <span>X</span>
        </div>
      </div>
    </div>
  );
}
