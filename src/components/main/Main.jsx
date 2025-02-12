import React from 'react'
import Phone from "../../img/.png"
import "./index.css"

function Main() {
  return (
    <div> 
        <main>
    <div className="container">
      <div className="information_cards">
        <div className="cards">
          <h1>iPhone 12 Pro</h1>
          <p>
            The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's latest generation of smartphones, 
            offering 5G connectivity, the A14 chip for better performance.
          </p>
          <div className="btns">
            <button>Order now</button>
            <button className="more">Learn more</button>
          </div>
        </div>
        <div className="information_img">
          <img src={Phone} alt="iPhone 12 Pro" /> 
        </div>
      </div>
    </div>
  </main>
  </div>
  )
}

export default Main