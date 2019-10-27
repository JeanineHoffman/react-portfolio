import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default class App extends Component {
  render(){

    return(
      <div className = "App" >
      <Navigation />
      <Header />
      <Switch>
        <Route
          exact
          path={'/'}
          component={HomePage}
          />

        <Route
          exact
          path={'/bio'}
          component={Bio}
          />

        <Route
          exact
          path={'/projects'}
          component={Projects}
          />
        <Route 
        exact path={'/contact'}
        component={Contact}
        />
          </Switch>
          <Footer />
          </div>
      );
  }
}


