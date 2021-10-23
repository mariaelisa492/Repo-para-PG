import "./navBar.css";
import { useState } from 'react';
import logo from "../../images/waveMusic.png"
import { Search } from "../Search/SearchBar";
import { LoginTest } from "../Login/LoginTest";
import { Logout } from "../Login/LogoutTest";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaSearch } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';


export default function NavBar({ showDropDownMenu }) {
  // Este componente es demasiado grande!  Pero con el tiempo que tenemos
  // prefiero no tocarlo por ahora, veremos la semana proxima si se puede
  // limpiar y refactorear un poco.

  const {isAuthenticated} = useAuth0()
  const [ popup, setPopup ] = useState({
    search: false,
    login: false,
  });

  const pleaseLogin = e => {
    e.preventDefault();
    alert("Please login or register");
  };

  const showBar = () => setPopup({ ...popup, search: true });
  const hideBar = () => setPopup({ ...popup, search: false });

  return (
    <nav className="navBar">
      <div className='landscape'>
        <label className="logo">
          <NavLink to="/" className="active"><img src={logo} alt="logo"/></NavLink>
        </label>

        <div className='searchBar'>
          <Search />
        </div>

        <div className='userActions'>
          {isAuthenticated
            ? <NavLink to='/profile' activeClassName='activeLink'  >
                <FaUser className='menuIcon' />
              </NavLink>
              : <FaUser className='menuIcon' onClick={e => pleaseLogin(e)} />}

          {isAuthenticated
            ? <NavLink to="/cart" activeClassName='activeLink' >
                <GrCart className='menuIcon' />
              </NavLink>
            : <GrCart className='menuIcon' onClick={e => pleaseLogin(e)} />}

          {isAuthenticated ? <Logout/> : <LoginTest/>}
        </div>
      </div>

      <div className='portrait'>
        <label className="logo">
          <NavLink to="/" className="active"><img src={logo} alt="logo"/></NavLink>
        </label>

        <div className={'popupSearchBar ' + (popup.search ? 'showSearch' : 'hideSearch')}>
          <Search hideFunc={hideBar}/>
          <p className='closeSearch' onClick={hideBar}>close</p>
        </div>

        <div className='mobileOptions'>
          <FaSearch className='noLink' onClick={showBar}/>
          {isAuthenticated
            ? <NavLink to='/profile' activeClassName='activeLink'  >
                <FaUser className='menuIcon' />
              </NavLink>
              : <FaUser className='menuIcon' onClick={e => pleaseLogin(e)} />}

          {isAuthenticated
            ? <NavLink to="/cart" activeClassName='activeLink' >
                <GrCart className='menuIcon' />
              </NavLink>
            : <GrCart className='menuIcon' onClick={e => pleaseLogin(e)} />}

          {isAuthenticated ? <Logout/> : <LoginTest/>}

          <FaBars className='noLink' onClick={showDropDownMenu}/>
        </div>
      </div>
    </nav>
  );
}
