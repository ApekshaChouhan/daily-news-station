import React from 'react'
import "./MidNav.css"
import axios from "axios"
import { useState } from 'react';
export const MidNav = () => {



  const [data, setData] = useState([]);
  const [heading, setHeading] = useState("");

  const getData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        setData(res.data.articles)
        setHeading("USA")
      })
  }
  const AusGetData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        // console.log("Sports", res)
        setData(res.data.articles)
        setHeading("Australia")
      })
  }
  const JPGetData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=jp&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        // console.log("technology", res)
        setData(res.data.articles)
        setHeading("Japan")
      })
  }
  const INDIAGetData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        // console.log("Science", res)
        setData(res.data.articles)
        setHeading("India")
      })
  }
  const UKGetData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=uk&apiKey=9c9f029326444bf88b4fd39966aedb34")
      .then((res) => {
        // console.log("Business", res)
        setData(res.data.articles)
        setHeading("UK")
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
        <div className='btndiv' onClick={INDIAGetData}><button className='btn' >INDIA</button></div>
          <div className='btndiv' onClick={getData}><button className='btn'>USA</button></div>
          <div className='btndiv' onClick={AusGetData}><button className='btn'>Australia</button></div>
          <div className='btndiv' onClick={JPGetData}><button className='btn' >Japan</button></div>
          <div className='btndiv' onClick={UKGetData}><button className='btn' >UK</button></div>
        </div>

        <h1>{heading}</h1>
        <div className='container'>
          {newsData}


        </div>
      </div>
    </>

  )
}
