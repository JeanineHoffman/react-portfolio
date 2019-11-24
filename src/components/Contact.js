import React, { Component } from 'react';
import linkedin from '../Assets/Images/linkedin.jpeg';
import github from '../Assets/Images/github.png';
import email from '../Assets/Images/email.jpeg';


export default class Contact extends Component {
  render() {
    return (
      <section className="contactSection" aria-label="contact section"  >
        <h2 className="contactTitle">Find me:</h2>
        <div className="linksBar">
        <a href="mailto:jeaninehoffman42@gmail.com">
          <img className="links" src={email} alt="email link" target="_blank" rel="noopener noreferrer"/></a>
        <a href="https://github.com/JeanineHoffman">
          <img className="links" src={github} alt="Github link" target="_blank" rel="noopener noreferrer" /></a>
        <a href="https://www.linkedin.com/in/jeanine-hoffman42">
          <img className="links" src={linkedin} alt="LinkedIn link" target="_blank" rel="noopener noreferrer" /></a>
          </div>
      </section>
    );
  }
}