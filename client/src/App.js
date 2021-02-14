import react, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import FaultyPage from './pages/FaultyPage';
import ItemDetails from './components/vendor/ItemDetails';

import UserCartProvider from './contexts/UserCart'
import EditItem from './components/shoppingcart/EditItem';
import Checkout from './components/shoppingcart/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  return (
    <Router>
      <div>
        <Header />
        <div className="page-container">
          <div className="content-wrap">
            <UserCartProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/store" exact component={Store} />
                <Route path="/store/item/:id" component={ItemDetails} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/EditItem" exact component={EditItem} />
                <Route path="/EditItem/:id" component={EditItem} />
                <Route path="/Checkout" component={Checkout} />
                <Route path="/*" component={FaultyPage} />
              </Switch>
            </UserCartProvider>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;