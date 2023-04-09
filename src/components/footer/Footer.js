import React from "react"
import "./footer.css"
import { Link, NavLink } from "react-router-dom"
import poto from "./tech-logo-footer.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src={poto} alt='' />
            <p>Read Early Warning, Renewal America, Renewal Europe, Way Forward. Browse & Search articles. Leading news sites in US, Europe, Asia. Search+ browse articles. All countries, world news. See Women's Perspective. Search Browse for Insight. Gist most viewed articles.</p>
            
          </div>
          <div className='box'>
           
            
          </div>
          <div className='box'>
            
          </div>
          <div className='box'>
            <h3>Category</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <a href="/entertainment"><span>entertainment</span></a> <label>(65)</label>
              </li>
              <li>
              <a href="/health"><span>health</span></a> <label>(73)</label>
              </li>
              <li>
              <a href="/Technology"><span>Technology</span></a> <label>(52)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with  by shreyans
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
