import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { Product } from "../Product/Product";
import { getProductsByPriceAsc, getProductsByPriceDesc, getProducts, filterProductsByPriceLessThan, filterProductsByPriceMoreThan, filterProductsByPriceRange } from "../../redux/actions";
import "./productsList.css";

export const ProductsList = ({ filteredProducts }) => {
  console.log(filteredProducts, "ProductsList");
  
  const [limit, setLimit] = useState(0);
  const [lessThan, setLessThan] = useState(null)
  const [moreThan, setMoreThan] = useState(null)
  const dispatch = useDispatch()

  function handleSelectOrderChange(e){

    let value = e.target.value

    if(value === 'Ascending Order'){
      dispatch(getProductsByPriceAsc())
    }
    if(value === 'Descending Order'){
      dispatch(getProductsByPriceDesc())
    }
  }

  function handleSubmitPriceFilter(e, moreThan, lessThan){
    e.preventDefaut()

    if(lessThan === null){
      dispatch(filterProductsByPriceMoreThan(moreThan))
    }
    if(moreThan === null){
      dispatch(filterProductsByPriceLessThan(lessThan))
    }
    else{
      dispatch(filterProductsByPriceRange(moreThan,lessThan))
    }

  }

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
        <p>showing {limit} to {limit + 6 < filteredProducts.length? limit +6 : filteredProducts.length} of {filteredProducts.length} products</p>
      <div className='buttonsContainer' >
        <button onClick={lower} className='buttonss'>Previous 6</button>
        <button onClick={raise} className='buttonss'>Next 6</button>
      </div>
        <div>
          <label>Order by Price </label>
          <select name='orderByPrice' onChange={handleSelectOrderChange}>
            <option value=''></option>
            <option value='Ascending Order'>Ascending Order</option>
            <option value='Descending Order'>Descending Order</option>
          </select>
        </div>
          <hr/>
        <div className='formPrice'>
          <form onSubmit={(e) => handleSubmitPriceFilter(e, moreThan, lessThan)}>
            <label>Filter By Price</label>
            <p>More Than</p>
            <input name='less' type='number' value={moreThan} onChange={e => setMoreThan(e.target.value)}></input>
            <p>Less Than</p>
            <input name='more' type='number' value={lessThan} onChange={e => setLessThan(e.target.value)}></input>
            <p></p>
            <button type='submit'>Filter</button>
          </form>
        </div>

    </div>
  );
};
