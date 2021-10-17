import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProductDetail from "../components/Detail/Detail";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";


export const Detail = (props) => {

  const [ showMenu, setShowMenu ] = useState(false);

  function showDropDownMenu() {
    setShowMenu(!showMenu);
    console.log('drop down menu: ', showMenu);
  }


  const id = useParams();
  console.log("Product id: ", id);

  return (
    <div>
      
      <DropDownMenu showMenu={showMenu} showDropDownMenu={showDropDownMenu} />

      <div>
        <NavBar showDropDownMenu={showDropDownMenu} />
      </div>

      <ProductDetail id={id} showMenu={showMenu} showDropDownMenu={showDropDownMenu} />

      <div>
        <Footer/>
      </div>


    </div>
  );
};

