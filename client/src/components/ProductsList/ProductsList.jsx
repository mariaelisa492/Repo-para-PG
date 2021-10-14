import React, {useState} from "react";
import { Product } from "../Product/Product";
import "./productsList.css";

export const ProductsList = ({ filteredProducts }) => {
  console.log(filteredProducts, "ProductsList");

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
        <p>showing {limit} to {limit + 6 < filteredProducts.length? limit +6 : filteredProducts.length} of {filteredProducts.length} products</p>

    </div>
  );
};
