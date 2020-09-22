import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDetail from './components/Vendor/ItemDetail'
import EditItem from './components/CartComps/EditItem'
import Checkout from './components/CartComps/Checkout'
import Cart from './pages/Cart'
import Home from './pages/Home'
import WPW from './pages/WPW'
import Store from './pages/Store'
import SiteMap from './pages/SiteMap'
import AboutUs from './pages/About-Us'
import ContactUs from './pages/Contact-Us'

import InventoryProvider from './contexts/Inventory'
import UserProvider from './contexts/User';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="page-container">
          <div className="content-wrap">
            <Switch>
              <InventoryProvider>
                <UserProvider>
                  <Route path="/" exact component={Home} />
                  <Route path="/wpw" exact component={WPW} />
                  <Route path="/cart" exact component={Cart} />
                  <Route path="/store" exact component={Store} />
                  <Route path="/store/:id" component={ItemDetail} />
                  <Route path="/edititem/:id" component={EditItem} />
                  <Route path="/checkout" exact component={Checkout} />
                  <Route path="/sitemap" exact component={SiteMap} />
                  <Route path="/about-us" exact component={AboutUs} />
                  <Route path="/contact-us" exact component={ContactUs} />
                </UserProvider>
              </InventoryProvider>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
