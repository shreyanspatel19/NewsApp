import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item dropdown">
              <Link className=" dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              country
              </Link >
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/united_States_of_America">United States of America</Link ></li>
                <li><Link className="dropdown-item" to="/russian_Federation">Russian Federation</Link ></li>
                <li><Link className="dropdown-item" to="/ukraine">Ukraine </Link ></li>
              </ul>
            </li>
              <li>
              <Link  to="/business">Business</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/health">Health</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
