import React, {useState} from "react";
import "./navBar.css";
import {BsFillCartFill} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {BsSearch} from "react-icons/bs"

export default function NavBar() {
    const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="NavBar">
        <div className="leftSide">
            <input type="text" placeholder="Search..."/>
            <button><BsSearch/></button>
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
