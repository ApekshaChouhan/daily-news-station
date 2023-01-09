import React from "react";
import {BsFacebook,BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import "./Contact.css"
const Contact = ()=>{
    return(
<>
<div id="Contact">
<div className="ContactP">
<h1>CONTACT US</h1>
<h4>Visit Us:www.InstaDotAnalytics.com</h4>
<h4>Call Us:+91-9425******</h4>
<h4>Mail Us:InstaDotAnalytics@gmail.com</h4>
</div>
<div id="icons">
    <h4><BsFacebook/></h4>
    <h4><AiFillInstagram/></h4>
    <h4><BsTwitter/></h4>
</div></div>
</>
    )
}

export default Contact;