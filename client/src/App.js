import react, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
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
import WPW from './pages/WPW';
import AboutUs from './pages/About-Us';
import ContactUs from './pages/Contact-Us';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SiteMap from './pages/SiteMap';


function App() {

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  return (
    <Router>
      <div>
        <Header />
        <div className="page-container">
          <div className="content-wrap">
            <UserCartProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/wpw" exact component={WPW} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/store" exact component={Store} />
                <Route path="/store/item/:id" component={ItemDetails} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/edititem" exact component={EditItem} />
                <Route path="/edititem/:id" component={EditItem} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Route path="/sitemap" component={SiteMap} />
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
