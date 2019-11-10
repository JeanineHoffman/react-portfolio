import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='footerWrapper'>
        <div className="logoFooter">
          <Link
            to='/'><img src={logo} className="logoFooterimg" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' /></Link>
        </div>
        <div className="copyright">
          <p >Jeanine Hoffman © 2019</p>
        </div>
        {/* <div className="footerContact">
          <a href="mailto:jeaninehoffman42@gmail.com" target="_blank" rel="noopener noreferrer">

            <img className="footerLink" src={email} alt="email link" /></a>

          <a href="https://github.com/JeanineHoffman" target="_blank" rel="noopener noreferrer">
            <img className="footerLink" src={github} alt="Github link" /></a>
            
          <a href="https://www.linkedin.com/in/jeanine-hoffman42" target="_blank" rel="noopener noreferrer">
            <img className="footerLink" src={linkedin} alt="LinkedIn link" /></a>
        </div> */}
      </div>
    );
  }
}