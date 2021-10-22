import React from 'react'

export default function Paginado({prev, next}) {
    return (
        <ul className="pos">
            <button className="prev" onClick={prev}>Prev</button> 
            <button className="next" onClick={next}>Next</button>           
        </ul>
  );
}