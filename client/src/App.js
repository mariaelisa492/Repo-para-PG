import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import {Login} from './pages/Login';
import {Home} from './pages/Home';
import FormCreateProducts from './components/FormCreateProducts/FormCreateProducts'; // modificar esta linea cuando se haga la page

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" component={Login}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/create" component={FormCreateProducts}/>
      </Switch>
    </div>
  );
}

export default App;
