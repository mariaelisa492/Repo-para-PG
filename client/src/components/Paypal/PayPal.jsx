import React, { useState } from "react";
import ReactDOM from "react-dom"
import './PayPal.css'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice, items}) {
  console.log(totalPrice)
 

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
          console.log(data, "LA DATAAA")         
        ) .then(console.log(items, "LOS ITEEEEMS"))}
        />
      
    </div>
    
    );
    
  }
  

export default CheckoutBut

