import React from 'react'
import "./MainRouter.css"
import Technology from './RouterComponents/Technology';
// import Home from './RouterComponents/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Entertainment from './RouterComponents/Entertainment';
import Shopping from './RouterComponents/Shopping';
import { MidNav } from '../MidNav';
import Health from './RouterComponents/Health';
import Sports from './RouterComponents/Sports';
import Science from './RouterComponents/Science';

export default function MainRouter() {
  return (
    <div id='BrowserRouter'>
      <BrowserRouter >
        <div style={{height:"2rem",margin:"auto"}}></div>
        <div id='BRchild'>
        <Link className="Link"to="/home">News</Link>
        <Link className="Link" to="/technology">Technology</Link>
        <Link className="Link" to="/sports">Sports</Link>
        <Link className="Link" to="/health">Health</Link>
        <Link className="Link" to="/shopping">Shopping</Link>
        <Link className="Link" to="/entertainment">Entertainment</Link>
        <Link className="Link" to="/science">Science</Link>
        </div>
        <div style={{height:"2rem",margin:"auto"}}></div>
        <div>
        <Routes >
          {/* <Route className="Route"  path='/' element={<Home/>} /> */}
          <Route  className="Route" path='/home' element={<MidNav />} />
          <Route  className="Route" path='/technology' element={<Technology />}/>
            <Route  className="Route" path="entertainment" element={<Entertainment />}/>
              <Route  className="Route" path='shopping' element={<Shopping />} />
              <Route  className="Route" path='health' element={<Health />} />
              <Route  className="Route" path='science' element={<Science />} />
            
          <Route  className="Route" path='/sports' element={<Sports/>} />

        </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}