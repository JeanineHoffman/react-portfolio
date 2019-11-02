import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
      <div className="About">
        <article className="bio" arial-label="biography section">
          <h2 className="aboutTitle">A little about me</h2>

          <p className="aboutText"> The code school I chose, Thinkful, taught me that we never stop growing or learning. When I'm not finding new drills or code challenges to work, I spend my time in a variety of ways. Living in Portland means access to world class soccer, art, nature, and farmers' markets.</p>
          <p className="aboutText">
          As a Timbers and Thorns fan, I joined the 107ist Supporters group. I spend some of my time giving back to the community through volunteer activities that support the growth of soccer and equality throughout our area. The 107ist supporters pull together as a team, which is something I've found I enjoy taking part in during my experience with Thinkful's Engineering Immersion team approach. </p><br/>
          <p className="aboutText">
          Programming, especially with an eye towards making things accessible to all, is my current passion. Working with a variety of people in class has helped me find the things I'm good at doing and taught me that it is okay to not know the answer right away. The great thing about tech and me is that we both grow and change with time. Seems like I found my niche.</p>
          <br />
          <p>My primary tech stack from Thinkful includes HTML, JS, CSS, React, Node.js, Express, PostgreSQL. I'm looking forward to expanding on that knowledge and learning more languages.</p>
        </article>
      </div>
    );
  }
}