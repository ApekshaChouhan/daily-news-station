import './App.css';
import Home from './Routing/RouterComponents/Home';
import About from "./Routing/RouterComponents/About"
import Contact from "./Routing/RouterComponents/Contact"
import Login from './Login';
import Navbar from './AppBR';
import {BrowserRouter  ,Routes, Route  } from "react-router-dom"
function App() {
  return (
     <div className="App">
 <BrowserRouter>
    <Navbar></Navbar>
    <div style={{height:"2rem"}}></div>
  <Routes>
    
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/Contact' element={<Contact/>}></Route>
  </Routes>  
      
 </BrowserRouter>
    </div>
  );
}

export default App;