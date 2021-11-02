import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store/index'
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Auth0Provider 
    domain='dev-auhhzee9.us.auth0.com' 
    clientId='xQDFmB5mg94YjlPVoWP5k3TjEpOoW92t' 
    redirectUri={window.location.origin} >
        <App />
      </Auth0Provider>
  </BrowserRouter>
  </Provider>
      ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
