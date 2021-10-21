import React, { useState } from "react";
import ReactDOM from "react-dom"
import './PayPal.css'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice, items}) {
  console.log(totalPrice)
 

  const createOrder = (data, actions) => {
    
    console.log(data)
    console.log(items)
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
     
      <PayPalButton style={{ color: "blue", shape: "pill", label: "pay", height: 40, with:20}}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        />
      
    </div>
    
    );
    
  }
  

export default CheckoutBut

