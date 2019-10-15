import React, { Component, Link } from 'react';
import logo from '../Assets/Images/logo.png';
import hero from '../Assets/Images/railbridge.jpeg';

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' height='120px' />
        <img src={hero} alt='Portland Oregon Rail bridge, lit for dusk' />
      </div>
    );
  }
}







