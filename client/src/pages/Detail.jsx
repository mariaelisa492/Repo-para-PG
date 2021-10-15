import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProductDetail from "../components/Detail/Detail";


export const Detail = () => {


  return (
    <div>
      
      <div>
        <NavBar />
      </div>

      <ProductDetail />

      <div>
        <Footer/>
      </div>


    </div>
  );
};

