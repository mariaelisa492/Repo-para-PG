import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProductDetail from "../components/Detail/Detail";


export const Detail = (props) => {

  const id = useParams();
  console.log("Product id: ", id);

  return (
    <div>
      
      <div>
        <NavBar />
      </div>

      <ProductDetail id={id} />

      <div>
        <Footer/>
      </div>


    </div>
  );
};

