
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import "./App.css" 
export default function Navbar() {
  const [showNav, setShowNav] = useState(true);






  return (
    <>
      <div id='Navbar'>
        <div id='navchild1'>
          <img src='/staricon.png' className="icon1" style={{ height: "35px", margin: "10px" }} />
        </div>
        <div id="navchild2"><h2>InstaDot </h2></div>
        <div id='navchild3'>
          <ul >
            {/* {this.props.index} */}

            <li ><button className="button" id="Home">HOME</button></li>
            <li ><button className="button">CONTACT</button></li>
            <li ><button className="button">ABOUT</button></li>
          </ul></div>
        <div id='navchild-3'>
          <ul >

            <li ><button className="button form">Login/SignUp</button></li>

          </ul>
        </div>

        <button id="menuicon" onClick={() => {
          setShowNav(!showNav)
        }}><FiMenu /></button>

      </div>
      <div style={{height:"5rem",margin:"auto"}}></div>
      <div >{showNav ? ""   :<div className="Btn" ><div id="btn1">
        <ul>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>Contact</button></li>
        </ul>
      </div>
        <div id="btn2">
          <ul>
            <li><button>Login/SignUp</button></li>

          </ul>
        </div></div> }
        
      </div>

      <div>
    
      </div>




    </>
  )
}

