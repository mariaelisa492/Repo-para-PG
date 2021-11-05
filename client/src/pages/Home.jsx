import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import ProductsList from "../components/ProductsList/ProductsList";
import NavBar from "../components/NavBar/NavBar";
import SlideShow from "../components/SlideShow/SlideShow";
import TopMenu from "../components/TopMenu/TopMenu";
import FilterProducts from "../components/FilterProducts/FilterProducts";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";
import { categories } from "../components/Categories/categoriesExport";
import Loader from "../components/Loader/Loader";
import { cleanQuestions, getAbout, getWishlist } from '../redux/actions/index';
import { useAuth0 } from '@auth0/auth0-react'
import './home.css';

export const Home = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const [showMenu, setShowMenu] = useState(false);
  const products = useSelector((state) => state.products)
  const filteredTF = useSelector((state) => state.filteredTF)

  // console.log('SOOOOOOY FILTEREDPRODUCST DE HOME', filteredProducts)

  const {user, isAuthenticated} = useAuth0()

  console.log(filteredTF, 'FILTEREDTF')
  console.log(products, 'products')
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    if(isAuthenticated){
      dispatch(getWishlist(user?.email))
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])


  function showDropDownMenu() {
    setShowMenu(!showMenu);
    console.log('drop down menu: ', showMenu);
  }


  // console.log(products, 'Estado de no modificable')
  // console.log(filteredProducts, "Estado modificable");

  return (

    <div className='pageContainer'>
    
      <div>
        <NavBar showDropDownMenu={showDropDownMenu} />
      </div>

      <div className='mainView' >
        <DropDownMenu categories={categories} showMenu={showMenu} showDropDownMenu={showDropDownMenu} />
        <TopMenu categories={categories} />
        <div className='slideAndProducts'>
          <div>
            <SlideShow />
          </div>

          <FilterProducts />
          <div>
            {(loading) ? <Loader /> :
              <ProductsList filteredProducts={filteredTF ? filteredProducts : products} />
            }
          </div>
        </div>
      </div>

        <Footer />      
    </div>
  );
};

