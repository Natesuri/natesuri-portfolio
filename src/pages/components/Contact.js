import React from 'react'
import { Link } from 'react-router-dom'

import '../pages.scss'

const Contact  = () => (
  <section id="contact" className='view'>
        <div className='container'>
          <div className='contact-blurb'>
            <h2>Contact</h2>
            <p>I'd love to chat. Please reach out!</p>
            <a className='contact email' href='mailto:natesuri@gmail.com?Subject=Hey%20Nate'>natesuri [at] gmail [dot] com</a>
            <div className='w-100'></div>
            <a className='contact github' href='https://github.com/Natesuri'>natesuri [on] github</a>
            <div className='w-100'></div>
            <a className='contact linkedIn' href='https://www.linkedin.com/in/natesuri/'>natesuri [Linked] In</a>
          </div>
        </div>
      </section>
)

export default Contact
