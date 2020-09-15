import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ArticleListing from './containers/ArticleListing';


function App() {
  return (
    <div className="App">
      <h1>Exercise One</h1>
        {/* self closing tab. don't need anything inside. */}
        <ArticleListing /> 
      </div>
  );
}

export default App;
