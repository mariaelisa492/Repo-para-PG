import React from "react";
import { Product } from "../Product/Product";
import './productsList.css'

export const ProductsList = ({filteredProducts}) =>{

    console.log(filteredProducts, 'ProductsList')

    return(
        <div className='productList'>


        { filteredProducts.map(e =>{
            return(
                <Product img={e.image} name={e.name} price={e.price} rating={e.rating} isActive={e.isActive}/>
                
                )
            })}
            
            </div>
            )
    
}