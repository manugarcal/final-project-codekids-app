import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test1 from './test1';

import './style.css';

import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap';
import 'jquery';
import 'popper.js'
import Test from './test';




ReactDOM.render(
  <React.StrictMode>

   {/*  <Test1 /> 

    <Test /> */}
    <App/>

  </React.StrictMode>,
  document.getElementById('root')
);


