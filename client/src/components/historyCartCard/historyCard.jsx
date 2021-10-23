import React, { useEffect, useState } from "react";
import  HistoryOrders  from "../historyOrders/historyOrders"
import Paginado from "../OrderPaginate/OrderPag"
import './historyC.css'


function HistoryCard({ order }) {

    const [index, setIndex] = useState({
      current: 0
    })
   
     const handleNext = (e) => {
       e.preventDefault()  
        if(index.current < order.length - 1) {
          setIndex({...index, current: index.current + 1})
        }
    };

    const handlePrev = (e) => {
      e.preventDefault()
      if(index.current > 0) {
        setIndex({...index, current: index.current - 1})
      }
    };

  return (

    <div className="containerHistory">
      <div className="infoContainer">
        <div className="dataHistory">
        <h1>Order Date: {order[index.current].orderDate.split("T")[0]}</h1>
        <p>Total Price: {order[index.current].totalPrice}</p>
        </div>
        <div className="paginadoOrder">
        <Paginado
                prev={handlePrev}
                next={handleNext}
        /> 
          </div> 
        <div className="cardsContainer">
           {order[index.current].items.map(e => {
             return < HistoryOrders brand={e.brand} image={e.img} name={e.name} price={e.price} qty={e.qty} />
            })}       
        </div>
        </div>
    </div>
  );
}

export default HistoryCard