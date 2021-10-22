import React, { useEffect, useState } from "react";
import  HistoryOrders  from "../historyOrders/historyOrders"
import Paginado from "../OrderPaginate/OrderPag"
import './historyC.css'


function HistoryCard({ order }) {

    const [userOrders, setUserOrders] = useState(order[0].items)
    const [currentOrder, setCurrentOrder] = useState(0)
    console.log('SOOOOOOOOOOOOOY USER ORDER', userOrders)



     const handleNext = (e) => {
       e.preventDefault()  
       if(currentOrder === order.length  ){
         console.log('!!!!!!!!!!!!! SOY LA PRIMER i de NEXT', currentOrder)
        setUserOrders(order[currentOrder].items)
      } else {
          setCurrentOrder(currentOrder + 1)
          console.log('!!!!!!!!!!!!! SOY LASEGUNDA i de NEXT', currentOrder)
          setUserOrders(order[currentOrder + 1].items)  
        }
    };

    const handlePrev = (e) => {
      e.preventDefault()
      if(currentOrder === 0){
        console.log('!!!!!!!!!!!!! SOY LA PRIMER i de PREV', currentOrder)
        setCurrentOrder(0)
        setUserOrders(order[currentOrder].items);
      } else {
        setCurrentOrder(currentOrder - 1)
          console.log('!!!!!!!!!!!!! SOY LA SEGUNDA i de PREV', currentOrder)
           setUserOrders(order[currentOrder].items);  
      }
    }

  return (

    <div className="">
      <div className="">
        <h1>Date: </h1>
        <div className="">
           {userOrders.map(e => {
             return < HistoryOrders brand={e.brand} image={e.img} name={e.name} price={e.price} qty={e.qty} />
            })}       
        </div> 
        <Paginado
                prev={handlePrev}
                next={handleNext}
        /> 
    </div>
    </div>
  );
}

export default HistoryCard