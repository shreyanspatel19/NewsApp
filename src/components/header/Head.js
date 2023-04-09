import React from "react"
import logo from "./logo.png"
import nlogo from "./headerb.png"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img className="img-fluid" src={logo} alt='' />
          </div>
          <div className='ad'>
            <img className="img-fluid" src={nlogo} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
