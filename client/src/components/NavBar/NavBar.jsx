import React, { useState } from "react";
import "./navBar.css";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs"
import logo from "../../images/logo.png"
import { Search } from "../Search/SearchBar";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false)

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
        <li><a href="#" className="active">Home</a></li>
        <li> <a href="/"><BsFillPersonFill /></a></li>
        <li><a href="/"><BsFillCartFill /></a></li>
      </ul>
    </nav>
  );
}
