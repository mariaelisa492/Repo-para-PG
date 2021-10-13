import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { ProductsList } from "../components/ProductsList/ProductsList";
import NavBar from "../components/NavBar/NavBar";

export const Home = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);

  // console.log(products, 'Estado de no modificable')
  console.log(filteredProducts, "Estado modificable");

  return (
    <div>
      
      <div>
        <NavBar />
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          <ProductsList filteredProducts={filteredProducts} />
        ) : (
          <p>loading</p>
        )}
      </div>

      <div>
        <Footer/>
      </div>


    </div>
  );
};

