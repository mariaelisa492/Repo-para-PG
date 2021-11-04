import React, { useEffect } from 'react';
import './App.css';
import './components/Login/Login.css'
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail';
import { getProducts } from './redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
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
import CommonRoute from './components/PrivateRoute/CommonRoute';


function App() {
  const dispatch = useDispatch()
  const update = useSelector(state => state.update)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch, update])

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <CommonRoute exact path='/about' component={InfoCommerce} />
        <CommonRoute exact path="/profile" component={Profile} />
        <CommonRoute exact path="/cart" component={ShoppingCart} />
        {/* <Route exact path='/categories' component={Categories} /> */}
        <PrivateRoute exact path="/admin/users" component={Users} />
        <PrivateRoute exact path="/admin/products" component={Dashboard} />
        <PrivateRoute exact path="/admin/sales" component={AdminSales} />
        <PrivateRoute exact path="/admin/users" component={Users} />
        <PrivateRoute exact path='/admin/questions' component={QuestionsAdminSide} />
        <PrivateRoute exact path='/admin/about' component={About} />
      </Switch>
      <Route path='/admin' component={DashStyles} />
    </div>
  );
}

export default App;