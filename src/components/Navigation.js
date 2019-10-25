import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// import Bio from '../Assets/Images/bio.png';



export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <Link to='/bio'>
          Bio
        </Link>
        <Link to='/'>
          Home
    </Link>
        <Link to='/contact'>
          Contact
  </Link>
        <Link to='/projects'>
          Projects
  </Link>
      </div >

    );
  }
}


