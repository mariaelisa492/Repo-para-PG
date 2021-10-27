import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Cart from './components/Cart/Cart';
import { Route, Switch} from 'react-router';
import {Home} from './pages/Home'
import {Detail} from './pages/Detail';
import {getProducts} from './redux/actions/index'
import {useDispatch} from 'react-redux'
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Categories } from './components/Categories/Categories';
import { Profile } from './pages/Profile';
import { ShoppingCart } from './pages/ShoppingCart';
import { Users } from './components/Users/Users';
import Footer from './components/Footer/Footer';
import InfoCommerce from './pages/InfoCommerce';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="App">
      <Switch>
      <Route exact path = "/profile" component={Profile}/>
      <Route exact path = "/detail/:id" component={Detail}/>
      <Route exact path = "/cart" component={ShoppingCart}/>
      <Route exact path = "/admin" component={Dashboard}/>
      <Route exact path = "/admin/users" component={Users}/>
      <Route exact path = "/" component={Home}/>
      <Route exact path = '/categories' component={Categories}/>
      <Route exact path = '/about' component={InfoCommerce}/>
      </Switch>
    </div>
  );
}

export default App;