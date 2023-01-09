

import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import "./App.css" 
import { NavLink ,Outlet } from "react-router-dom";
export default function Navbar() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div id='Navbar'>
          <img src='/News2.png' className="icon1" style={{ height: "4rem", margin: "1.5rem" }} />
        
        <div id="navchild2"><h3>NewsStation </h3></div>
        <div id='navchild3'>
          <ul >
            {/* {this.props.index} */}

            <li ><NavLink className="button" id="Home" to="/">HOME</NavLink></li>
            <li ><NavLink className="button" to="/contact">CONTACT</NavLink></li>
            <li ><NavLink className="button" to="/about">ABOUT</NavLink></li>
          </ul></div>
          <Outlet/>
        <div id='navchild-3'>
          <ul >

            <li ><NavLink className="button form" to="/login">Login/Signup</NavLink></li>

          </ul>
        </div>

        <button id="menuicon" onClick={() => {
          setShowNav(!showNav)
        }}><FiMenu /></button>
      </div>
<div style={{height:"5rem",margin:"auto"}}></div>

      <div id=" DropDown">{showNav ? ""   :<div className="Btn"><div id="btn1">
        <ul>
          <li><NavLink style={{textDecoration:"none"}}  to="/">Home</NavLink></li>
          <li><NavLink style={{textDecoration:"none"}} to="/about">About</NavLink></li>
          <li><NavLink  style={{textDecoration:"none"}}  to="/contact">Contact</NavLink></li>
        </ul>
      </div>
        <div id="btn2">
          <ul>
            <li><NavLink style={{textDecoration:"none"}} to="/login"  >Login/SignUp</NavLink></li>

          </ul>
        </div></div> }
        
      </div>

      <div>
    
      </div>




    </>
  )
}

