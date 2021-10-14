import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { Product } from "../Product/Product";
import { getProductsByPriceAsc, getProductsByPriceDesc, getProducts } from "../../redux/actions";
import "./productsList.css";

export const ProductsList = ({ filteredProducts }) => {
  console.log(filteredProducts, "ProductsList");

  const dispatch = useDispatch()

  function handleSelectChange(e){
    let value = e.target.value
    if(value === 'Ascending Order'){
      dispatch(getProductsByPriceAsc())
    }
    if(value === 'Descending Order'){
      dispatch(getProductsByPriceDesc())
    }
    if(value === 'None'){
      dispatch(getProducts())
    }
  }
  const [limit, setLimit] = useState(0);

  function raise(){
    if(limit + 6 <= filteredProducts.length){
      setLimit(limit + 6)
    }
  }

  function lower(){
    if(limit - 6 >= 0){
      setLimit(limit - 6)
    }
    }

    
  return (
    <div className="containerList">
      <div className="productList">
        {filteredProducts.slice(limit, limit + 6).map((e) => {
          return (
            <Product
              img={e.image}
              name={e.name}
              price={e.price}
              rating={e.rating}
              isActive={e.isActive}
            />
          );
        })}
      </div>
      <hr/>
      <div className='buttonsContainer' >
        <button onClick={lower} className='buttonss'>Previous 6</button>
        <button onClick={raise} className='buttonss'>Next 6</button>
      </div>
        <div>
          <label>Order by Price</label>
          <select name='orderByPrice' onChange={handleSelectChange}>
            <option value=''></option>
            <option value='Ascending Order'>Ascending Order</option>
            <option value='Descending Order'>Descending Order</option>
            <option value='None'>None</option>
          </select>
        </div>
        <p>showing {limit} to {limit + 6 < filteredProducts.length? limit +6 : filteredProducts.length} of {filteredProducts.length} products</p>

    </div>
  );
};
