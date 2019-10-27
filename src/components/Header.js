import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='banner'>
        <header className="App-header">
          <div className="titleDiv">
            <h1 role='banner' className='title'>Jeanine Hoffman</h1>
            <h2 role='banner' className='subTitle'>Full Stack Engineer</h2>
          </div>
        </header>
        <div className="quoteWrap">
          <article className="quote" aria-label="A favorite quote">
            <p>“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”
      ― douglas adams, The Long Dark Tea-Time of the Soul</p>
          </article>
        </div>
        </div>

        );
      }
}