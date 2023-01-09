import React from 'react'
// import "./MidNav.css"
import axios from "axios"
import { useState } from 'react';
const Science = () => {



  const [data, setData] = useState([]);
  const [heading, setHeading] = useState("");

  
  const ScienceGetData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        // console.log("Sports", res)
        setData(res.data.articles)
        setHeading("Science")
      })
  }
  
  const newsData = data.map((value, index) => {
    return (
      

      <div key={index}>
        <div className='item'>
          <div className="card" >
            <img className="card-img-top" src={value.urlToImage} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{value.description}</p>
            </div>
          </div>

        </div>
      </div>

    )
  })
  return (
    <>


      <div>
        <div className='item1'>
          <div className='btndiv' onClick={ScienceGetData}><button className='btn'>Science</button></div>
        </div>

        <h1>{heading}</h1>
        <div className='container'>
          {newsData}


        </div>
      </div>
    </>

  )
}
export default Science