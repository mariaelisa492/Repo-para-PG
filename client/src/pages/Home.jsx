import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const Home = () => {

  const filteredProducts = useSelector((state) => state.filteredProducts)

  // console.log(products, 'Estado de no modificable')
  console.log(filteredProducts, 'Estado modificable')  

    return (
      <div>
       {filteredProducts.length > 0 ? <ProductsList filteredProducts={filteredProducts} /> : <p>loading</p>}
     </div>
    );


};

