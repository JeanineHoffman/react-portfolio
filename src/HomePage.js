import React, { Component } from 'react';
import hero from '../src/Assets/Images/railbridge.jpeg';



export default class HomePage extends Component {
  render() {
    return (
      <div className="heroContainer">
        <img className="hero" src={hero} alt='Portland Oregon Rail bridge, lit for dusk' />
      </div>
    );
  }
}