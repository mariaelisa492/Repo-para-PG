import React from "react";
import  HistoryOrders  from "../historyOrders/HistoryOrders"
import './historyC.css'


function HistoryCard({ order }) {

    const data = order[0].items
    const map = data.map(e => {
        return {
            brand: e.brand,
            img: e.img,
            name: e.name,
            price: e.price,
            qty: e.qty  
        }
    });
    console.log("ITEMS DEL CARRITOOOOOO", map);

 

  return (
    <div className="">
      <div className="">
        <h1>History</h1>
        <div className="">
            {data.map(e => {
             return < HistoryOrders brand={e.brand} image={e.img} name={e.name} price={e.price} qty={e.qty} />
            })}           
        </div>    
    </div>
    </div>
  );
}

export default HistoryCard