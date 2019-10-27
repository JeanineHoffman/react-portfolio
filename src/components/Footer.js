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
      <div className="footerContact">
        <a href="mailto:jeaninehoffman42@gmail.com">
          <img className="email" src="src/Assets/Images/email.jpeg" alt="email link" target="_blank" rel="noopener noreferrer"/></a>
        <a href="https://github.com/JeanineHoffman">
          <img class="github" src="../Assets/Images/github.png" alt="Github link" target="_blank" rel="noopener noreferrer" /></a>
        <a href="https://www.linkedin.com/in/jeanine-hoffman42">
          <img class="linkedin" src="src/Assets/Images/linkedin.jpegsrc/Assets/Images/linkedin.jpeg" alt="LinkedIn link" target="_blank" rel="noopener noreferrer" /></a>
      </div>
      </div>
    );
  }
}