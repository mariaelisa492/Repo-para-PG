import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/Login';
import {Products} from './pages/Products';
import {Home} from './pages/Home'
import {Detail} from './pages/Detail';
import {getProducts} from './redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'
import { UserProfile } from './components/User/UserProfile';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]) 

  return (
    <div className="App">
      <Switch>
      <Route exact path = "/profile" component={UserProfile}/>
      <Route exact path = "/"> <Redirect to='/home'></Redirect> </Route>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/create" component={Products}/>
      <Route exact path = "/detail/:id" component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
