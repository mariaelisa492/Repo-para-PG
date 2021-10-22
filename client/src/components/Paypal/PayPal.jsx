import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux";
import './PayPal.css'
import { setNewOrder, emptyCart } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice, items, totalItems}) {
  

  const {user} = useAuth0()
  const dispatch = useDispatch()
  

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  
    //console.log('!!!!!!!!!!!!!!!!!', user.email)
  return (
    <div className="paypalButContainer">
     
      <PayPalButton style={{ color: "blue", shape: "pill", label: "pay", height: 40, with:20}}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions).then(
          dispatch(setNewOrder({
          user: user.email,
          items: items.map(elem => (
            {
              name: elem.name,
              brand: elem.brand,
              qty: elem.qty
            } 
          )),
          quantity: totalItems,
          totalPrice: totalPrice,
          status: "Processing"  
        }))         
        )}
        
        />
      
    </div>
    
    );
    
  }
  

export default CheckoutBut

