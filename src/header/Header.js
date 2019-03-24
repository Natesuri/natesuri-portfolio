import React from 'react'
import { Link } from 'react-router-dom'
import PDF from '../images/NateSuriResume.pdf'

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
        <a href={PDF} target='_blank'>Resume</a>
      </nav>
    </div>
    <header>
      <div>
        <div className='signature'>Nate Suri</div>
        <div className='w-100'></div>
        <div className='my-title'>Web Developer && Storyteller</div>
      </div>
    </header>
  </React.Fragment>
)

export default Header
