import React from 'react'
import { Link } from 'react-router-dom'

import '../pages.scss'

// would love to add a function that adds the class "colored" to an <i> when it's hovered over.

const Skills  = () => (
  <section className='view'>
        <div className='container'>
          <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-list' id='mySkills'>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-express-original-wordmark"></i>
              <i className="devicon-ruby-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-react-original"></i>
            </div>
          </div>
        </div>
      </section>
)

export default Skills
