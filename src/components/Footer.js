import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';


export default class Footer extends Component {
  render() {
    return (
      <div className='footerWrapper'>
        <div className="logoFooter">
          <Link
            to='/'><img src={logo} className="logo" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' /></Link>
        </div>
        <div className="copyright">
          <p >Jeanine Hoffman © 2019</p>
        </div>
      </div>
    );
  }
}