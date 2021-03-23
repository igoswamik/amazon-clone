import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    //BEM
    <Router>
    <div className="App">
    <Header/>  
    {/* //since we want to render the header regadless of the route in which we are */}
      <Switch>
      <Route path="/checkout">
          
          <Checkout/>
        </Route>
        <Route path="/">
          
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
