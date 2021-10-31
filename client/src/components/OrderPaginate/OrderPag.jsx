import React from 'react'
import './orderPag.css'

export default function Paginado({prev, next}) {
    return (
        <ul className="pos">
            <span className="prev" onClick={prev}>Prev</span> 
            <span className="next" onClick={next}>Next</span>           
        </ul>
  );
}