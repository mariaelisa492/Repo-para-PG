import React, { useState } from "react";
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux";
import './PayPal.css'
import { setNewOrder } from "../../redux/actions";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice, items, user, totalItems}) {
  console.log(totalPrice)
  console.log('ITEEEEEEEEEMS', items)

    
  
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

  
  
  return (
    <div className="paypalButContainer">
     
      <PayPalButton style={{ color: "blue", shape: "pill", label: "pay", height: 40 }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions).then(
          dispatch(setNewOrder({
          user: user,
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

