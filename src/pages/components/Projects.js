import React from 'react'
import { Link } from 'react-router-dom'

// images
import npf from '../../images/npf.png'
import fb from '../../images/fb.png'
import garden from '../../images/garden.png'
import tictactoe from '../../images/tic tac toe.png'

// styles
import '../pages.scss'

const Projects  = () => (
  <section id="projects" class='view'>
        <div class='container'>
        <div class='lead'>
          <h3>Projects</h3>
          <p>
            While building apps during {"GA's"} WDI bootcamp, I learned a lot about myself as a creator:
          </p>
          <p>
            I love challenging myself, {"I'm"} a quick learner, and I deeply care about code quality.
          </p>
        </div>
        <div class='samples'>
          <div class='project'>
            <div class='tile'>
              <div class='tile-image'>
                <img src={npf} alt=''/>
              </div>
              <div class='tile-links'>
                <a href='https://natesuri.github.io/national-park-client/#/'><button>Deployed Site</button></a>
                <a href='https://github.com/Natesuri/national-park-client'><button>Front-end Repo</button></a>
                <a href='https://github.com/Natesuri/national-park-api'><button>Back-end Repo</button></a>
              </div>
            </div>
            <div class='project-body'>
              <div class='body-text'>
                <h4>National Park Finder</h4>
                <p>
                  For my capstone project I set out to make a web application that would help a user find the best National Parks for them to visit. After discovering the plethora of data available on the National Parks Service (NPS) API, I knew I could quickly create a useful and informative app that leveraged all of that available data.
                </p>
                <p>
                  This application takes advantage of {"React's"} state lifecycle by dynamically re-rendering the view based on the {"state's"} current park. The Express backend communicates with the {"app's"} MongoDB database (to store user data), as well as the NPS API for park data.
                </p>
              </div>
              <div class='tech'>
                <div class='first'>React</div>
                <div>Express</div>
                <div>MongoDB</div>
                <div>Mongoose</div>
                <div class='last'>Node</div>
              </div>
            </div>
          </div>
          <div class='project'>
            <div class='tile'>
              <div class='tile-image'>
                <img src={fb} alt=''/>
              </div>
              <div class='tile-links'>
                <a href='https://needsmorecaramel.github.io/Facebird-Client/'><button>Deployed Site</button></a>
                <a href='https://github.com/Natesuri/Facebird-Client'><button>Front-end Repo</button></a>
                <a href='https://github.com/Natesuri/Facebird-Api'><button>Back-end Repo</button></a>
              </div>
            </div>
            <div class='project-body'>
              <div class='body-text'>
                <h4>Facebird</h4>
                <p>
                  Facebird is a social media full stack app built with a JS / HTML front-end and Express back-end. This was my first group project as I developer, but I was very comfortable with JS, and when my team asked me to take the role of project lead, I was excited to meet the challenge. This was an invaluable experience as I grew as both a leader and an engineer.
                </p>
                <p>
                  As the project lead, I designed our code architecture, pair-programmed with our front-end and back-end leads to write the app, ensured our team followed best practices for scrum and git workflow, and got every team member involved in the planning phase and code review.
                </p>
              </div>
              <div class='tech'>
                <div class='first'>Express</div>
                <div>MongoDB</div>
                <div>JS</div>
                <div>HTML / CSS</div>
                <div>Handlebars</div>
                <div class='last'>Node</div>
              </div>
            </div>
          </div>
          <div class='project'>
            <div class='tile'>
              <div class='tile-image'>
                <img src={garden} alt=''/>
              </div>
              <div class='tile-links'>
                <a href='https://natesuri.github.io/suri-garden-client/'><button>Deployed Site</button></a>
                <a href='https://github.com/Natesuri/suri-garden-client'><button>Front-end Repo</button></a>
                <a href='https://github.com/Natesuri/Suri-Garden-App'><button>Back-end Repo</button></a>
              </div>
            </div>
            <div class='project-body'>
              <div class='body-text'>
                <h4>Garden Manager</h4>
                <p>
                  My second project, a garden management full stack app, is built with a Rails / PostgreSQL back-end and JS / HTML front-end. This app is meant to help people with busy schedules remember when to water and harvest plants in their personal gardens.
                </p>
                <p>
                  This app leverages Rails and Active Records to manage a {"user’s"} relationship with their plots and plants, and only return plots belonging to the authenticated user. It also uses handlebars to dynamically create markup that visually represents a {"user’s"} garden.
                </p>
                <p>
                  Unfortunately, the plethora of attributes within the plants and plots tables introduced significant scope creep. I had to scale back my MVP for this project, so a user currently is only able to create plots with certain attributes. I really enjoyed working in Rails and {"I’m"} excited to finish this application so that I can see the power of relational databases at work.
                </p>
              </div>
              <div class='tech'>
                <div class='first'>Ruby on Rails</div>
                <div>PostgreSQL</div>
                <div>HTML / CSS</div>
                <div>JS</div>
                <div>Handlebars</div>
                <div class='last'>Bootstrap</div>
              </div>
            </div>
          </div>
          <div class='project'>
            <div class='tile'>
              <div class='tile-image'>
                <img src={tictactoe} alt=''/>
              </div>
              <div class='tile-links'>
                <a href='https://natesuri.github.io/tic-tac-toe/'><button>Deployed Site</button></a>
                <a href='https://github.com/Natesuri/tic-tac-toe'><button>Front-end Repo</button></a>
              </div>
            </div>
            <div class='project-body'>
              <div class='body-text'>
                <h4>Tic Tac Toe</h4>
                <p>
                  Since the early days of my web development journey {"I've"} cared about writing DRY code and have connected with the philosophy of “work smarter, not harder.” So when we started our first project at bootcamp, a tic tac toe game, I knew that I wanted to write game logic that could work on any sized game board.
                </p>
                <p>
                  By prioritizing this dynamic win logic I solidified my understanding of basic JavaScript and logical problem solving, creating a solid JS foundation for me to build on the rest of the cohort.
                </p>
              </div>
              <div class='tech'>
                <div class='first'>JS</div>
                <div>HTML / CSS</div>
                <div>Bootstrap</div>
                <div class='last'>Sass</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
)

export default Projects
