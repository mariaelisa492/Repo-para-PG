import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Product from "../Product/Product";
import { getProductsByPriceAsc, getProductsByPriceDesc, setLimit, getProducts, filterProductsByPriceLessThan, filterProductsByPriceMoreThan, filterProductsByPriceRange } from "../../redux/actions";
import "./productsList.css";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';


export default function ProductsList({ filteredProducts }) {
  // console.log(filteredProducts, "ProductsList");

  const limit = useSelector((state)=> state.limit)
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

    // console.log(moreThan,'moreThan')
    // console.log(lessThan,'lessThan')
    
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
    if (limit + 8 <= filteredProducts.length) {
      dispatch(setLimit(limit + 8))
    }
  }

  function lower() {
    if (limit - 8 >= 0) {
      dispatch(setLimit(limit - 8))
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
  
  var slicedFilteredProducts = filteredProducts.slice(limit, limit + 8)
  var keyblablabla = 0
  
  return (
    <>
      <div className="containerList">
        <div className="productList">
          {slicedFilteredProducts.map((e) => {
            keyblablabla++
            return (
              <Product
                img={e.image}
                name={e.name}
                price={e.price}
                reviews={e.reviews}
                _id={e._id}
                isActive={e.isActive}
                stock={e.stock}
                key={keyblablabla}
              />
            );
          })}
        </div>
        
        <div >
          <div className="button_pagination">
            <button onClick={lower} className='arrowPage'><MdOutlineArrowBackIosNew  /> <h4  >Previous</h4> </button>
            <div className="pagination">
              <p>{limit} to {limit + 8 < filteredProducts.length ? limit + 8 : filteredProducts.length} of {filteredProducts.length}</p>
            </div>
            <button onClick={raise} className='arrowPage'><h4>Next</h4> <MdOutlineArrowForwardIos /></button>
          </div>
        </div>
          <hr/>

        {/* Comento de manera temporal para poner los filtros y ordenamientos arriba,
        // seguramente en un componente aparte

        <div className='formPrice'>
          <div>
            <label className='labels'>Order by Price </label>
            <select name='orderByPrice' onChange={(e) => handleSelectOrderChange(e)}>
              <option value=''></option>
              <option value='Ascending Order'>Ascending Order</option>
              <option value='Descending Order'>Descending Order</option>
            </select>
          </div>
          <div className='filterPrice'>
              <form onSubmit={(e) => handleSubmitPriceFilter(e, moreThan, lessThan)}>
                <label className='labels'>Filter By Price</label>
                <p>More Than</p>
                <input name='more' type='number' value={moreThan} onChange={(e) => handleInputChange(e)}></input>
                <p>Less Than</p>
                <input name='less' type='number' value={lessThan} onChange={(e) => handleInputChange(e)}></input>
                <p></p>
                <button type='submit'>Filter</button>
              </form>
            </div>
          </div>
            */}
        
      </div>
    </>
  );
};
