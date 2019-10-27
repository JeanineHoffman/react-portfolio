import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import { slide as Menu } from 'react-burger-menu';


export default class Navigation extends Component {
  render() {
    return (
      <div className="navWrap">
        <div className="logo">
          <img src={logo} className="logo" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' />
        </div>
        {/* <Menu pageWrapId={ 'page-wrap' } className='hide-menu' isOpen={ true }> */}
        <nav className="navBar">
          <Link to='/bio'>
            <button className="navBtn" name="About">About</button>
          </Link>
          <Link to='/contact'>
            <button className="navBtn" name="Contact">Contact</button>
          </Link>
          <Link to='/projects'>
            <button className="navBtn" name="Projects">Projects</button>
          </Link>
          <Link to='/'>
            <button className="navBtn" name="Home">Home</button>
          </Link>
        </nav>
        {/* </Menu> */}
      </div>
    );
  }
}


