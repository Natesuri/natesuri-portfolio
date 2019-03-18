import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import Header from './header/Header.js'
import Home from './pages/components/Home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header path='/' />
        <Route exact path='/' render={() => <Home/>} />
      </React.Fragment>
    );
  }
}

export default App;
