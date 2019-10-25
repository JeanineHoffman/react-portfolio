import React, { Component } from 'react';



export default class Contact extends Component {
  render() {
    return (
      <section className="contactSection" aria-label="contact section"  >
        <h2>Find me:</h2>
        <a href="mailto:jeaninehoffman42@gmail.com">
          <img className="email" src="../Assets/Images/email.jpeg" alt="email link" target="_blank" rel="noopener noreferrer"/></a>
        <a href="https://github.com/JeanineHoffman">
          <img class="github" src="../Assets/Images/github.png" alt="Github link" target="_blank" rel="noopener noreferrer" /></a>
        <a href="https://www.linkedin.com/in/jeanine-hoffman42">
          <img class="linkedin" src="../Assets/Images/linkedin.jpeg" alt="LinkedIn link" target="_blank" rel="noopener noreferrer" /></a>
      </section>
    );
  }
}
