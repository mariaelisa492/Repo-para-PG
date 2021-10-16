import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { ProductsList } from "../components/ProductsList/ProductsList";
import NavBar from "../components/NavBar/NavBar";
import SlideShow from "../components/SlideShow/SlideShow";

export const Home = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const products = useSelector((state) => state.products)
  const filteredTF = useSelector((state) => state.filteredTF)
  console.log(filteredTF, 'FILTEREDTF')
  console.log(products, 'products')



  // console.log(products, 'Estado de no modificable')
  console.log(filteredProducts, "Estado modificable");

  return (
    <div>
      
      <div>
        <NavBar />
      </div>
      <div>
        <SlideShow />
      </div>

      <div>
        {
          <ProductsList filteredProducts={filteredTF ? filteredProducts : products} />
        }
      </div>

      <div>
        <Footer/>
      </div>


    </div>
  );
};

