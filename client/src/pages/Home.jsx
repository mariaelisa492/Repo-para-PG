import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { ProductsList } from "../components/ProductsList/ProductsList";
import NavBar from "../components/NavBar/NavBar";
import SlideShow from "../components/SlideShow/SlideShow";
import SideBar from "../components/SideBar/SideBar";
import './home.css';


export const Home = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);

  // console.log(products, 'Estado de no modificable')
  console.log(filteredProducts, "Estado modificable");

  return (
    <div>
      
      <div>
        <NavBar />
      </div>
      <div className='mainView' >
        <SideBar />
        <div className='slideAndProducts'>
          <div>
            <SlideShow />
          </div>

          <div>
            {filteredProducts.length > 0 ? (
              <ProductsList filteredProducts={filteredProducts} />
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>


    </div>
  );
};

