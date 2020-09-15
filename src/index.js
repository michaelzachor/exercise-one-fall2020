import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import the App class from App.js
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //what are you rendering (React and whatever's in the App file),
  //where are you rendering it to
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
