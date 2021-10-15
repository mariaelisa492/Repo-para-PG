import React, { useState } from "react";
import { Product } from "../Product/Product";
import "./productsList.css";

export const ProductsList = ({ filteredProducts }) => {
  console.log(filteredProducts, "ProductsList");

  const [limit, setLimit] = useState(0);

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
                isActive={e.isActive}
              />
            );
          })}
        </div>
        <div >
          <div className="button_pagination">
            <button onClick={lower} >Previous</button>
            <button onClick={raise} >Next</button>
          </div>
        </div>
        <div className="pagination">
          <p>Showing {limit} to {limit + 6 < filteredProducts.length ? limit + 6 : filteredProducts.length} of {filteredProducts.length} products</p>
        </div>
      </div>
    </>
  );
};
