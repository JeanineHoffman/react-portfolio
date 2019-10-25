import React, { Component } from 'react';
// import city from '../Assets/Images/city.png'

export default class Projects extends Component {
  render() {
    
  return (
    <article className="projectSection" aria-label="projects section">
      <div className="proj1">
        <h3 className="projTitles">City-Look Up</h3>
        {/* <img class="projimg" src={city} alt="general picture of a city skyline." title="cityscape"></img> */}
        <p>City Look-Up is designed to help people who may be interested in relocating to a new city. The idea is that with a quick search the user will see data on cost of living and quality of life, along with a local map and a random picture from the city's coordinates.</p>
        <p>This app uses API data from both MapBox and Teleport. The app is built with HTML, CSS, and JS.</p>

        <a href=" https://jeaninehoffman.github.io/City-Look-Up/" target="_blank" rel="noopener noreferrer"><button class="projectsnavbtn" type="button" aria-label="quiz button">Give it a shot</button></a>
        <a href="https://github.com/JeanineHoffman/City-Look-Up" target="_blank" rel="noopener noreferrer"><button type="button" class="projectCodebtn" aria-label="button to code review">Code for App</button></a>
      </div>
      <div className="proj2">
        <h3 className="projTitles">Lesfic Repository</h3>
        <p>For readers of genres that don't make the mainstream marketing cut, it can be tough to find the books that you're looking for when searching places like Amazon. I'm and both a reader and writer of lesbian fiction (lesfic) and I've searched countless times for new works in lesbian paranormal fiction and come up with countless books featuring men. Not what I asked for-thanks anyway.</p>
        <p>Frustration with a lack of a solid catalogue of strictly stories that feature women who identify as lesbians became a goal to create such a repository. I'm planning on crowd-sourcing the work of filling the database to the Golden Crown Literary Society-an Organization I've been a proud member of for years and whose sole mission is to promote the entrie genre od lesbian writing.</p>
        <a href="https://lesfic-rate-your-reads-git-master.jeaninehoffman.now.sh/" target="_blank" rel="noopener noreferrer"><button class="projectsnavbtn" type="button" aria-label="lesfic app button">Give it a shot</button></a>
        <a href="https://github.com/JeanineHoffman/LesFic-Rate-Your-Reads.git" target="_blank" rel="noopener noreferrer"><button type="button" class="projectCodebtn" aria-label="button to code review">Client Code</button></a>
        <a href="https://github.com/JeanineHoffman/lesfic-server.git" target="_blank" rel="noopener noreferrer"><button type="button" class="projectCodebtn" aria-label="button to code review">Server Code</button></a>
      </div>
      <div className="proj3">
        <h3 className="projTitles">The Community Toolbox</h3>
        <p> The Community Toolbox is an app that allows community run lending libraries work more efficiently in their areas. With slight adaptations the app is designed to help users find the tools they need for home improvement and garden/lawn care tasks without the investment cost and need for storage of seldom used, bulky tools.</p>
        <p>This was a team Capstone project during which I worked as project manager for my five person team. We thankfully had a team member well versed in design. In three weeks we managed to do a prety extensive app involving predictive text search, building a multi table database, public and private routing, JWT auth, and integrated the use of Cloudinary and Google Maps API.OUr demo is availble with the user name and password as Demo.</p>
        <a href="https://toolbox-client-git-master.teamredpanda.now.sh/" target="_blank" rel="noopener noreferrer"><button class="projectsnavbtn" type="button" aria-label="Toolbox app button">Give it a shot</button></a>
        <a href="https://github.com/CommunityTB/toolbox-client.git" target="_blank" rel="noopener noreferrer"><button type="button" class="projectCodebtn" aria-label="button to code review">Client Code</button></a>
        <a href="https://github.com/CommunityTB/toolbox-server.git" target="_blank" rel="noopener noreferrer"><button type="button" class="projectCodebtn" aria-label="button to code review">Server Code</button></a>
      </div>
    </article>
  );
}
}