import React, { Component } from 'react';
import hero from '../Assets/Images/railbridge.jpeg';
import logo from '../Assets/Images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='banner'>
        <header className="App-header">
          <img src={logo} className="logo" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' />

          <h1 role='banner' className='title'>Jeanine Hoffman</h1>
          <h2 role='banner' className='subTitle'>Full Stack Engineer</h2>
          <img className="hero" src={hero} alt='Portland Oregon Rail bridge, lit for dusk' />
        </header>

      </div>
    );
  }
}