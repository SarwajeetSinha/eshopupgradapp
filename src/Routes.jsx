import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use Switch

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavigationBar from './components/NavBar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

const AppRoutes = () => {
  return (
    <Router>
        <NavigationBar isLoggedIn={Boolean(localStorage.getItem("jwtToken"))}/>
      <Switch> {/* Use Switch */}
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/detail" component={ProductDetail} exact/>
        <Route path="/" component={Home} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
