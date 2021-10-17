import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import Product from "../Product/Product";
import { getProductsByPriceAsc, getProductsByPriceDesc, getProducts, filterProductsByPriceLessThan, filterProductsByPriceMoreThan, filterProductsByPriceRange } from "../../redux/actions";
import "./productsList.css";
import { PaginationOptions } from "../Pagination Options/PaginationOptions";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';


export default function ProductsList({ filteredProducts }) {
  console.log(filteredProducts, "ProductsList");

  const [limit, setLimit] = useState(0);
  const [lessThan, setLessThan] = useState(null)
  const [moreThan, setMoreThan] = useState(null)
  const dispatch = useDispatch()

  
  function handleSelectOrderChange(e){
    
    let value = e.target.value

    if (value === 'Ascending Order') {
      dispatch(getProductsByPriceAsc())
    }
    if (value === 'Descending Order') {
      dispatch(getProductsByPriceDesc())
    }
  }

  function handleSubmitPriceFilter(e, moreThan, lessThan) {
    e.preventDefault()

    console.log(moreThan,'moreThan')
    console.log(lessThan,'lessThan')
    
    if(lessThan === null){
      dispatch(filterProductsByPriceMoreThan(moreThan))
    }

    else if(moreThan === null){
      dispatch(filterProductsByPriceLessThan(lessThan))
    }

    else {
      dispatch(filterProductsByPriceRange(moreThan,lessThan))
    }
  }

  
  function raise() {
    if (limit + 6 <= filteredProducts.length) {
      setLimit(limit + 6)
    }
  }

  function lower() {
    if (limit - 6 >= 0) {
      setLimit(limit - 6)
    }
  }
  
  async function handleInputChange(e){
    e.preventDefault()

    let value = e.target.value
    let name = e.target.name
    console.log(name,'name IN HIC')
    console.log(value,'value IN HIC')
    console.log(moreThan,'moreThan IN HIC')
    console.log(lessThan,'lessThan IN HIC')

    if(name === 'more'){
      setMoreThan(value)
    }
    if(name ==='less'){
      setLessThan(value)
    }
  }
  
  return (
    <>
      <div className="containerList">
        <div className="productList">
          {filteredProducts.slice(limit, limit + 6).map((e) => {
            return (
              <Product
                img={e.image}
                name={e.name}
                price={e.price}
                rating={e.rating}
                id={e._id}
                isActive={e.isActive}
              />
            );
          })}
        </div>
        
        <div >
          <div className="button_pagination">
            <button onClick={lower} className='arrowPage'><MdOutlineArrowBackIosNew  /> <h4  >Previous</h4> </button>
            <div className="pagination">
              <p>Showing {limit} to {limit + 6 < filteredProducts.length ? limit + 6 : filteredProducts.length} of {filteredProducts.length} products</p>
            </div>
            <button onClick={raise} className='arrowPage'><h4>Next</h4> <MdOutlineArrowForwardIos /></button>
          </div>
        </div>
        <div>
          <label>Order by Price </label>
          <select name='orderByPrice' onChange={(e) => handleSelectOrderChange(e)}>
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
            <input name='more' type='number' value={moreThan} onChange={(e) => handleInputChange(e)}></input>
            <p>Less Than</p>
            <input name='less' type='number' value={lessThan} onChange={(e) => handleInputChange(e)}></input>
            <p></p>
            <button type='submit'>Filter</button>
          </form>
        </div>
       
      </div>
    </>
  );
};
