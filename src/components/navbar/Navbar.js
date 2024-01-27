import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <div className='screen'>
        <div className='btm-part'>
          <div className='flex banner bg-white'>
          <Link to="/" className='link'>
            <span className='anonymous-pro-bold mid-txt'>About me</span>
          </Link>
          <Link to="/projects" className='link'>
            <span className='anonymous-pro-bold mid-txt'>Projects</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
