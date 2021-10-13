import React, {useState} from "react";
import "./navBar.css";
import { Search } from "../Search/SearchBar";
import {BsFillCartFill, BsFillPersonFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"



export default function NavBar() {
    const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="NavBar">
        <div className="leftSide">
         <Search/>
        </div>
        <div className="rigthSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="/"><BsFillCartFill/></a>
            <a href="/"><BsFillPersonFill/></a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}><GiHamburgerMenu/></button>
        </div>
        <div className="items"></div>
      </div>
    </nav>
  );
}
