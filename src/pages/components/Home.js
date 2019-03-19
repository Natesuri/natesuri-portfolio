import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// images
import profile from '../../images/suri.jpg'

// styles
import '../pages.scss'

class Home extends Component {


  // componentDidMount () {}

  render () {
    // temporarily adding 'emphasized' to these className variables until I can apply animation
    let emphasisOne = 'emphasis-1 emphasized'
    let emphasisTwo = 'emphasis-2 emphasized'
    let emphasisThree = 'emphasis-3 emphasized'

    // trying to animate the emphasized class on page load.
    // will come back to it at a later time.
    /*
    setTimeout(() => {
      emphasisOne += ' emphasized'
    }, 500)
    setTimeout(() => {
      emphasisTwo += ' emphasized'
    }, 900)
    setTimeout(() => {
      emphasisThree += ' emphasized'
    }, 1500)
    */

    return (
      <section id="about" className='view active'>
        <div className='container'>
          <div className='double'>
            <div className=''>
              <img className='profile' src={profile} alt=''/>
            </div>
            <div className='about'>
              <h2>Howdy! I'm <span className={emphasisOne}>Nate Suri</span>.</h2>
              <p>
                I’m a <span className={emphasisTwo}>storyteller</span> at heart with a mission to share the story of innovators and difference makers in my community and the world.
                My experience in both filmmaking and programming gives me a unique perspective on how to create <span className={emphasisThree}>engaging and creative</span> web experiences.
              </p>
              <p>
                During my time at General Assembly’s Web Development Immersive bootcamp,
                I built three full stack applications, learning and leveraging technologies
                like JavaScript, Ruby on Rails, Express, React, HTML, CSS, Git, Sass, MongoDB
                and PostgreSQL to create those applications.
              </p>
              <p>
                In addition to my web developer experience, I have 10 years of video editing experience, working professionally in documentary post-production for the last three years.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
