import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation'

import PrivateRoute from './utils/PrivateRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Route  path='/' component={Navigation} />

        <Route exact path="/" component={Login} />
        <PrivateRoute exact path ='/bubbles' component={BubblePage} />
        
      </div>
    </Router>
  );
}

export default App;
