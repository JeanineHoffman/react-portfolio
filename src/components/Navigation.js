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
          <Link to='/'>
            <button type="button" name="home">Home</button>
          </Link>
          <Link to='/bio'>
            <button type="button" name="bio">About</button>
          </Link>
          <Link to='/projects'>
            <button type="button" name="projects">Projects</button>
          </Link>
          <Link to='/contact'>
            <button type="button" name="contact">Contact</button>
          </Link>
        </div >
      </div>
    );
  }
}


