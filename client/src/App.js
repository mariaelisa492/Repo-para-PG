import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import LoginRender from './pages/Login';
import { Home } from './pages/Home'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginRender} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

