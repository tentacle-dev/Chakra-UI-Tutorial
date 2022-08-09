import React from 'react'
import logo from "../logo.svg"
import Style from "../Styles/ReactOneStyle.css"

function Navbar(props) {
  return (
    <nav>
        <div className='nav-items'>
              <img src={logo} width="100"/>
              <h3>ReactFacts</h3>
              <h3>React Course Project 1</h3>
              </div>
    </nav>
  )
}

export default Navbar