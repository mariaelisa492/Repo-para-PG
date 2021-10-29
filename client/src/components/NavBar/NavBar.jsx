import "./navBar.css";
import { useState } from 'react';
import logo from "../../images/waveMusic.png";
import logoSmall from "../../images/waveMusicLogoSmall.png";
import { Search } from "../Search/SearchBar";
import { LoginTest } from "../Login/LoginTest";
import { Logout } from "../Login/LogoutTest";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaSearch, FaArrowRight } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import Modal from "../Modal/Modal";


export default function NavBar({ showDropDownMenu }) {
  // Este componente es demasiado grande!  Pero con el tiempo que tenemos
  // prefiero no tocarlo por ahora, veremos la semana proxima si se puede
  // limpiar y refactorear un poco.

  const { user, isAuthenticated, logout } = useAuth0()
  const [ popup, setPopup ] = useState({
    search: false,
    login: false,
    profile: false,
  });

  const showBar = () => setPopup({ ...popup, search: true });
  const hideBar = () => setPopup({ ...popup, search: false });
  const showDialog = () => setPopup({ ...popup, login: true });
  const hideDialog = () => setPopup({ ...popup, login: false });
  const toggleUserOptions = () => setPopup({ ...popup, profile: !popup.profile });

  const hadleChangeLogout = ()=>{
    localStorage.removeItem('items');
    logout({returnTo:window.location.origin})
}

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
              <NavLink to="/cart" activeClassName='activeLink' >
                <GrCart className='menuIcon' />
              </NavLink>
          
          {isAuthenticated &&
            <div className='profilePic' onClick={toggleUserOptions}>
              {/*<FaUser className='menuIcon' />*/}
              <img src={user.picture} alt={user.name} className='userCircle' />
            </div>
          }

          {!isAuthenticated && <LoginTest/>}
        </div>
      </div>

      <div className='portrait'>
        <label className="logo">
          <NavLink to="/" className="active"><img src={logoSmall} alt="logo"/></NavLink>
        </label>

        <div className={'popupSearchBar ' + (popup.search ? 'showSearch' : 'hideSearch')}>
          <Search hideFunc={hideBar}/>
          <p className='closeSearch' onClick={hideBar}>close</p>
        </div>

        <div className='mobileOptions'>
          <FaSearch className='noLink' onClick={showBar}/>

          {isAuthenticated
            ? <NavLink to="/cart" activeClassName='activeLink' className='profilePic' >
                <GrCart className='menuIcon' />
              </NavLink>
            : <GrCart className='menuIcon' onClick={showDialog} />}

          {isAuthenticated &&
            <div className='profilePic' onClick={toggleUserOptions}>
              {/*<FaUser className='menuIcon' />*/}
              <img src={user.picture} alt={user.name} className='userCircle' />
            </div>
          }

          {!isAuthenticated && <LoginTest/>}

          <FaBars className='noLink' onClick={showDropDownMenu}/>
        </div>
      </div>

      <Modal 
        show={popup.login}
        hideFunc={hideDialog}
        message="You need to be logged in to perform this action!" />

      <div className={'profileOptions' + (popup.profile ? ' showProfOpt' : ' hideProfOpt')}>
        <ul>
          <li>Account</li>
          <li>
            <NavLink to='/profile' activeClassName='profileActive' className='profileLink'>
              Your profile
            </NavLink>
          </li>
          <li className='logoutOption' onClick={hadleChangeLogout}>
            Logout <FaArrowRight className='exitIcon'/>
          </li>
        </ul>
      </div>
    </nav>
  );
}
