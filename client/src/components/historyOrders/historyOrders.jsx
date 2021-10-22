import React from 'react';
import "./historyOrder.css"


function HistoryOrders({ image, name, price, qty, brand  }) {

    console.log('ITEMS CARTTTTTTTTDECARTTTTTTT', image, name, price, qty)

    return (
        <div className="item-container">
          
          <div>
            <img className="itemCartImg" src={image}  alt={"imagen de producto"} />
          </div>
        
            <div className="info-item">
              <h3 className="itemName"> {name} </h3>
              <h3 className="itemName"> {brand} </h3>
              <h4 className="itemPrice">Price $  {price} </h4>
              <h4 className="itemPrice">Quantity: {qty} </h4>
            </div>
            
        </div>
      );
}

export default HistoryOrders