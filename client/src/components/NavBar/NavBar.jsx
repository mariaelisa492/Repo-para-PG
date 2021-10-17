import React, { useState } from "react";
import "./navBar.css";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs"
import logo from "../../images/logo.png"
import { Search } from "../Search/SearchBar";
import {GiHamburgerMenu} from "react-icons/gi"
import { LoginTest } from "../Login/LoginTest";
import { Logout } from "../Login/LogoutTest";
import {useAuth0} from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"; // a Link no se le pueden dar estilos...
import { FaBars, FaUser, FaUserCheck, FaShoppingCart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';


export default function NavBar({ showDropDownMenu }) {
  const [showLinks, setShowLinks] = useState(false)
  const {isAuthenticated} = useAuth0()

  function toggleLoginOptions() {
    setShowLinks(!showLinks);
  }

  return (
    <nav className="navBar">
      <label className="logo">
        <NavLink to="/" className="active"><img src={logo} alt="logo"/></NavLink>
      </label>
      <div>
        <Search />
      </div>
      
      <div className='mobileOptions'>
          <FaUser onClick={toggleLoginOptions} />

          <GrCart />

          <FaBars onClick={showDropDownMenu}/>
      </div>

      <div className={'loginOptions ' + (showLinks ? 'visible' : 'hidden')}>
        {isAuthenticated
          ? <NavLink to='/profile' className='activeLink' activeStyle={{color: 'black'}}>
              <FaUser />
            </NavLink>
          :null}
        {isAuthenticated
          ? <NavLink to="/cart" className='activeLink' activeStyle={{color: 'black'}}>
              <GrCart />
            </NavLink>
          :null}
        {isAuthenticated ? <Logout/> : <LoginTest/>}
      </div>

    </nav>
  );
}
