import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/app/App';
import NavbarGeneral from './Pages/layout/header';
import Setup from './Pages/setup';
import Pads from './Pages/Pads'
// import menu from './Pages/layout/menu';
import * as serviceWorker from './Utils/serviceWorker';

ReactDOM.render((
  <div>
    <NavbarGeneral />
    <Setup />
    <br/>
    <br/>
    <Pads/>
    {/* <menu /> */}    
  </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
