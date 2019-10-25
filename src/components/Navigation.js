import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bio from '../Assets/Images/bio.png';
import Projects from '../Assets/Images/Projects.png';
import Home from '../Assets/Images/Home.png';
import Contact from '../Assets/Images/Contact.png';


// import Bio from '../Assets/Images/bio.png';



export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <Link to='/bio'>
        <img src={bio} alt="link to biography section" />
        </Link>
        <Link to='/contact'>
        <img src={Contact} alt="link to contact me section"/>
  </Link>
        <Link to='/projects'>
        <img src={Projects} alt="link to projects section"/>
  </Link>
  <Link to='/'>
        <img src={Home} alt="link to landing page view"/>
  </Link>
      </div >

    );
  }
}


