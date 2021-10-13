import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import {Products} from './pages/Products';
import {Home} from './pages/Home'
import {getProducts} from './redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]) 

  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" component={Login}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/create" component={Products}/>
      </Switch>
    </div>
  );
}

export default App;
