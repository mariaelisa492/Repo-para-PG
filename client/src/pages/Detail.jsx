import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Detail from "../components/Detail/Detail";


export const Detail = () => {


  return (
    <div>
      
      <div>
        <NavBar />
      </div>

      <Detail />

      <div>
        <Footer/>
      </div>


    </div>
  );
};

