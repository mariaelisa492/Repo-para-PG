import React, { useEffect, useState } from "react";
import  HistoryOrders  from "../historyOrders/historyOrders"
import Paginado from "../OrderPaginate/OrderPag"
import { VscArchive } from "react-icons/vsc";
import './historyC.css'


function HistoryCard({ order }) {

  useEffect(() => {
    window.scrollTo(0,0)  
  }, [])

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
      {order[0]?.items ? 
      <div className="infoContainer">
        <div className="dataHistory">
        <h3 className="historyText">Order Date: {order[index.current].orderDate.split("T")[0]}</h3>
        <p className="historyText">Total Price: {order[index.current].totalPrice}</p>
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
     : 
     <div className="ordersEmpty">                  
                        <div>
                            <h4>
                            Your order history is empty
                            </h4>
                        </div>
                        <div className="icon_ordersEmpty">
                            <VscArchive/>
                        </div>
                        <div>
                          <h3>
                            ¡Buy something and come back! { ' :) ' }
                          </h3>  
                        </div>
                    </div>
    }
      </div>
  );
}

export default HistoryCard