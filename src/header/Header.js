import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => (
  <header>
    <div className='navbar'>
      <nav className='leftNav'>
        <Link to ='/'>Nate Suri</Link>
      </nav>
      <nav className='rightNav'>
        <Link to ='/'>About</Link>
        <Link to ='/'>Projects</Link>
        <Link to ='/'>Skills</Link>
        <Link to ='/'>Contact</Link>
        <Link to ='/'>Resume</Link>
      </nav>
    </div>
  </header>
)

export default Header
