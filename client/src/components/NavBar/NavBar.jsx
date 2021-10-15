import React, {useState} from "react";
import "./navBar.css";
import { Search } from "../Search/SearchBar";
import {BsFillCartFill, BsFillPersonFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import { LoginTest } from "../Login/LoginTest";
import { Logout } from "../Login/LogoutTest";
import {useAuth0} from "@auth0/auth0-react"
import { Link } from "react-router-dom";



export default function NavBar() {
    const [showLinks, setShowLinks] = useState(false)
    const {isAuthenticated} = useAuth0()

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
          {isAuthenticated?<Logout/>:<LoginTest/>}
          {isAuthenticated?(<Link to='/profile'><button className='profileBtn'>Perfil</button></Link>):null}
      </div>
            </nav>
  );
}
