import React from 'react';
import "./historyOrder.css"


function HistoryOrders({ image, name, price, qty, brand  }) {

    return (
        <div className="item-containerHistory">
          
          <div>
            <img className="itemCartImgHistory" src={image}  alt={"imagen de producto"} />
          </div>
        
            <div className="info-itemHistory">
              <h3 className="itemNameHistory"> {name} </h3>
              <h3 className="itemNameHistory"> {brand} </h3>
              <h4 className="itemPriceHistory">Price $  {price} </h4>
              <h4 className="itemPriceHistory">Quantity: {qty} </h4>
            </div>
            
        </div>
      );
}

export default HistoryOrders