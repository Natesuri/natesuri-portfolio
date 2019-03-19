import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import Header from './header/Header.js'
import Home from './pages/components/Home.js'
import Projects from './pages/components/Projects.js'
import Skills from './pages/components/Skills.js'
import Contact from './pages/components/Contact.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header path='/' />
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/projects' render={() => <Projects/>} />
        <Route exact path='/skills' render={() => <Skills/>} />
        <Route exact path='/contact' render={() => <Contact/>} />
      </React.Fragment>
    );
  }
}

export default App;
