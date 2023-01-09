import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { MidNav } from './MidNav';

import MainRouter from './Routing/MainRouter';
// import Navbar from './App';
import AppBR1 from "./AppBR1"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBR1/>
    {/* <Navbar /> */}
    <br/>
    <br/>
    <div style={{height:"3rem"}}></div>

    <MainRouter/>
  </React.StrictMode>
);
