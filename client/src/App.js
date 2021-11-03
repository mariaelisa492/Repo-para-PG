import React, { useEffect } from 'react';
import './App.css';
import './components/Login/Login.css'
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail';
import { getProducts } from './redux/actions/index'
import { useDispatch } from 'react-redux'
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Categories } from './components/Categories/Categories';
import { Profile } from './pages/Profile';
import { ShoppingCart } from './pages/ShoppingCart';
import { Users } from './components/Users/Users';
import AdminSales from './components/AdminSales/AdminSales';
import InfoCommerce from './pages/InfoCommerce';
import DashStyles from './components/DashStyles/DashStyles';
import { QuestionsAdminSide } from './components/QuestionsAdminSide/QuestionsAdminSide';
import About from './components/FormAbout/FormAbout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

 return (
   <div className="App">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/" component={Home} />
        <Route exact path='/categories' component={Categories} />
        <PrivateRoute exact path="/admin/users" component={Users} />
        <Route exact path='/about' component={InfoCommerce} /> 
        <PrivateRoute exact path="/admin/products" component={Dashboard} />
        <PrivateRoute exact path="/admin/sales" component={AdminSales} />
        <PrivateRoute exact path="/admin/users" component={Users} />
        <Route exact path='/about' component={InfoCommerce} />
        <PrivateRoute exact path='/admin/questions' component={QuestionsAdminSide} />
        <PrivateRoute exact path='/admin/about' component={About} />
      </Switch>
        <PrivateRoute exact path='/admin' component={DashStyles} />
    </div>
  );
}

export default App;