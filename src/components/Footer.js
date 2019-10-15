import React, { Component, Link } from 'react';
import logo from '../Assets/Images/logo.png';


export default class Footer extends Component {
  render(){
  return(
    <div className='footer'>
    <img src={logo} alt='logo-gold background with a douglas fir tree in black on the left and the initials JH on the right' height='75px'/>
      <p className='copyright'>Jeanine Hoffman © 2019</p>
    </div>
  );
  }
}