import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => (
  <React.Fragment>
    <div className='navbar'>
      <nav className='leftNav'>
        <Link to ='/'>Nate Suri</Link>
      </nav>
      <nav className='rightNav'>
        <Link to ='/'>About</Link>
        <Link to ='/projects'>Projects</Link>
        <Link to ='/skills'>Skills</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/'>Resume</Link>
      </nav>
    </div>
    <header>
      <div>
        <div class='signature'>Nate Suri</div>
        <div class='w-100'></div>
        <div class='my-title'>Web Developer && Storyteller</div>
      </div>
    </header>
  </React.Fragment>
)

export default Header
