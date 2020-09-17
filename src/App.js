//everything in this file gets placed on the html page

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import ArticleListing from './containers/ArticleListing';
import Article from "./containers/Article";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id"> 
            {/* if path == article show Article */}
            <Article /> 
          </Route>
          <Route path="/">
            {/* if path == nothing show ArticleListing */}
            <ArticleListing /> 
          </Route>
        </Switch>
      </Router>
      <h1>Exercise One</h1>
        {/* self closing tab. don't need anything inside. */}
      </div>
  );
}

export default App;
