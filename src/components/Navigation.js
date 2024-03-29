import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';


export default class Navigation extends Component {
  render() {
    return (
      <div className="navWrapper">
        <div className="logo">
          <img src={logo} className="logo" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' />
        </div>
        <div className="navBar">
          <Link to='/'
            className="navBtn home" name="home">Home
          </Link>
          <Link to='/bio'
          className="navBtn bio" 
          name="bio">
            About
          </Link>
          <Link to='/projects' 
          className="navBtn projects" name="projects">
            Projects
          </Link>
          <Link to='/contact' 
          className="navBtn contact" name="contact">
            Contact
          </Link>
        </div >
      </div>
    );
  }
}


