import "./navBar.css";
import { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from '../../redux/actions/index';
import axios from "axios";
import { LOCALHOST_URL } from "../../redux/constants";


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


    function createUser() {
      axios.post(`${LOCALHOST_URL}/users/signup`, { email: user.email, username: user.nickname })
      console.log("ACA DEBERIA APARECER EL CREATE USER")
  }

    setTimeout(() => {
    isAuthenticated ? createUser() : console.log("NO ESTA AUTENTICADO")
    }, 5000)
   

  const showBar = () => setPopup({ ...popup, search: true });
  const hideBar = () => setPopup({ ...popup, search: false });
  const showDialog = () => setPopup({ ...popup, login: true });
  const hideDialog = () => setPopup({ ...popup, login: false });
  const toggleUserOptions = () => setPopup({ ...popup, profile: !popup.profile });

  const hadleChangeLogout = ()=>{
    localStorage.removeItem('items');
    logout({returnTo:window.location.origin})
  }

  const dispatch = useDispatch()

  const about = useSelector(state => state.about);

  const [inputAbout, setInputAbout] = useState(about);

  useEffect(() => {
      dispatch(getAbout());
  }, [])

  useEffect(() => {
      setInputAbout(about);
  }, [about])


  const cart = useSelector(state => state.cart);


  return (
    <nav className="navBar">
      <div className='landscape'>
        <label className="logo">
          <NavLink to="/" className="active"><img src={inputAbout.logo || logo} alt="logo"/></NavLink>
        </label>

        <div className='searchBar'>
          <Search />
        </div>

        <div className='userActions'>
          <NavLink to="/cart" activeClassName='activeLink' >
            <div className='cartIcon'>
              <GrCart className='menuIcon' /><span className='itemCount' >{cart.length}</span>
            </div>
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
          <NavLink to="/" className="active"><img src={inputAbout.logoSmall || logoSmall} alt="logo"/></NavLink>
        </label>

        <div className={'popupSearchBar ' + (popup.search ? 'showSearch' : 'hideSearch')}>
          <Search hideFunc={hideBar}/>
          <p className='closeSearch' onClick={hideBar}>close</p>
        </div>

        <div className='mobileOptions'>
          <FaSearch className='noLink' onClick={showBar}/>

          <NavLink to="/cart" activeClassName='activeLink' >
            <div className='cartIcon'>
              <GrCart className='menuIcon' /><span className='itemCount' >{cart.length}</span>
            </div>
          </NavLink>

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
