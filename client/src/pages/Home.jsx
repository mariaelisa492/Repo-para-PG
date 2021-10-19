import React,{useState} from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import ProductsList from "../components/ProductsList/ProductsList";
import NavBar from "../components/NavBar/NavBar";
import SlideShow from "../components/SlideShow/SlideShow";
import SideBar from "../components/SideBar/SideBar";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";
import { categories } from "../components/Categories/categoriesExport";
import './home.css';


export const Home = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const [ showMenu, setShowMenu ] = useState(false);
  const products = useSelector((state) => state.products)
  const filteredTF = useSelector((state) => state.filteredTF)
  console.log(filteredTF, 'FILTEREDTF')
  console.log(products, 'products')
  
  function showDropDownMenu() {
    setShowMenu(!showMenu);
    console.log('drop down menu: ', showMenu);
  }


  // console.log(products, 'Estado de no modificable')
  // console.log(filteredProducts, "Estado modificable");

  return (
    <div>
    
      <div>
        <NavBar showDropDownMenu={showDropDownMenu} />
      </div>
     
      <div className='mainView' >
        <DropDownMenu showMenu={showMenu} showDropDownMenu={showDropDownMenu} />
        <SideBar categories={categories} />
        <div className='slideAndProducts'>
          <div>
            <SlideShow />
          </div>

          <div>
            {
              <ProductsList filteredProducts={filteredTF ? filteredProducts : products} />
            }
          </div>
        </div>
      </div>
   
      <div>
        <Footer/>
      </div>

    </div>
  );
};

