import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import linkedin from '../Assets/Images/linkedin.jpeg';
import github from '../Assets/Images/github.png';
import email from '../Assets/Images/email.jpeg';

export default class Footer extends Component {
  render() {
    return (
      <div className='footerWrap'>
        <div className="footerLogo">
          <Link
            to='/'><img src={logo} className="footerLogo" alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' /></Link>
              </div>
              <div   
            className='copyright'>Jeanine Hoffman © 2019</div>
        
        <div className="contactFooter" aria-label="contact section">
          <a href="mailto:jeaninehoffman42@gmail.com">
            <img className="email" src={email} alt="email link" target="_blank" rel="noopener noreferrer" height="50px" /></a>
          <a href="https://github.com/JeanineHoffman">
            <img className="github" src={github} alt="Github link" target="_blank" rel="noopener noreferrer" height="50px" /></a>
          <a href="https://www.linkedin.com/in/jeanine-hoffman42">
            <img className="linkedin" src={linkedin} alt="LinkedIn link" target="_blank" rel="noopener noreferrer" height="50px" /></a>
        </div>
      </div>
    );
  }
}