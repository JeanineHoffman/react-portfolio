import React, { Component } from 'react';
import hero from '../src/Assets/Images/railbridge.jpeg';




export default class HomePage extends Component {
  render(){
    return(
      <div className="homepage">
        <article className="AdamsQuote" aria-label="A favorite quote">
    <p>“I may not have gone where I intended to go, but I think I have ended up where I needed to be.” 
      ― douglas adams, The Long Dark Tea-Time of the Soul</p>
  </article>
  <div className="heroImgContainer">
  <img className="hero" src={hero} alt='Portland Oregon Rail bridge, lit for dusk' />
      </div>
      </div>
    );
  }


}