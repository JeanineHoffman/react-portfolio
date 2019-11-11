import React, { Component } from 'react';
import linkedin from '../Assets/Images/linkedin.jpeg';
import github from '../Assets/Images/github.png';
import email from '../Assets/Images/email.jpeg';


export default class Contact extends Component {
  render() {
    return (
      <section className="contactSection" aria-label="contact section"  >
        
        <div className="linksBar">
        <a href="mailto:jeaninehoffman42@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="links" src={email} alt="email link" /></a>
        <a href="https://github.com/JeanineHoffman" target="_blank" rel="noopener noreferrer">
          <img className="links" src={github} alt="Github link"  /></a>
        <a href="https://www.linkedin.com/in/jeanine-hoffman42" target="_blank" rel="noopener noreferrer">
          <img className="links" src={linkedin} alt="LinkedIn link"  /></a>
          </div>
      </section>
    );
  }
}
