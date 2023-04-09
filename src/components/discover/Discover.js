import React from "react"
import Heading from "../heading/Heading"
import "./style.css"
import d1 from "./discover/d1.jpg";
import d2 from "./discover/d2.jpg";
import d3 from "./discover/d3.jpg";
import d4 from "./discover/d4.jpg";
import d5 from "../discover/discover/d5.jpg";
const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Category' />
          <div className=''>
            <div className="row" >

                <div className='col-md-2 box'>
                  <div className='img'>
                    <img className="img-fuild" src={d1} alt='' />
                  </div>
                  <a href="/science" ><h1 className='title'>science</h1></a>
                </div>
                <div className='col-md-2 box'>
                  <div className='img'>
                    <img className="img-fuild" src={d2} alt='' />
                  </div>
                  <a href="/sports" ><h1 className='title'>sports</h1></a>
                </div>
                <div className='col-md-2 box'>
                  <div className='img'>
                    <img className="img-fuild" src={d3} alt='' />
                  </div>
                  <a href="/technology" ><h1 className='title'>technology</h1></a>
                </div>
                <div className='col-md-2 box'>
                  <div className='img'>
                    <img className="img-fuild" src={d4} alt='' />
                  </div>
                  <a href="/health" ><h1 className='title'>health</h1></a>
                </div>

                <div className='col-md-2 box'>
                  <div className='img'>
                    <img className="img-fuild" src={d5} alt='' />
                  </div>
                  <a href="/technology" ><h1 className='title'>technology</h1></a>
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
