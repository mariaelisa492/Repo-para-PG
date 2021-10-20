import React, { useState } from "react";
import ReactDOM from "react-dom"
import './PayPal.css'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice}) {
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
     
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}


export default CheckoutBut

