import React, { useState } from "react";
import "./navBar.css";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs"
import logo from "../../images/logo.png"
import { Search } from "../Search/SearchBar";
import {GiHamburgerMenu} from "react-icons/gi"
import { LoginTest } from "../Login/LoginTest";
import { Logout } from "../Login/LogoutTest";
import {useAuth0} from "@auth0/auth0-react"
import { Link } from "react-router-dom";


export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false)
  const {isAuthenticated} = useAuth0()

  return (
    <nav className="navBar">
      <label className="logo">
        <img src={logo} alt="logo"/>
      </label>
      <div>
        <Search />
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="items-nav">
        <li><Link to="/home" className="active">Home</Link></li>
        <li> {isAuthenticated?<Link to='/profile'><BsFillPersonFill /></Link>:null}</li>
        <li>{isAuthenticated?<Link to="/"><BsFillCartFill /></Link>:null}</li>
        <li> {isAuthenticated?<Logout/>:<LoginTest/>}</li>
      </ul>
    </nav>
  );
}
