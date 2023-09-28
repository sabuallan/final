import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListing from './components/ProductListing.js';
import ProductDetail from './components/ProductDetail.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
