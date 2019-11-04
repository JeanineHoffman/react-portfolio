import React, { Component } from 'react';
import City from '../Assets/Images/City.png';
import Toolbox from '../Assets/Images/Toolbox.png';
import LesficRepo from '../Assets/Images/LesficRepo.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="projWrapper">
        <div className="project1">
          <h3 className="projTitle1">City Look-Up</h3>
          <img className="projimg" src={City} alt="city skyline." title="cityscape" />
          <p className="proj1">City Look-Up is designed to help people who may be interested in relocating to a new city. The idea is that with a quick search the user will see data on cost of living and quality of life, along with a local map and a random picture from the city's coordinates.</p>
          <p className="proj1">This app uses API data from both MapBox and Teleport. The app is built with HTML, CSS, and JS.</p>
        </div>
        <div className="projBtnWrap2">
          <a href=" https://jeaninehoffman.github.io/City-Look-Up/" target="_blank" rel="noopener noreferrer"
            className="trybtn"
            aria-label="quiz button">Try it</a>
          <a href="https://github.com/JeanineHoffman/City-Look-Up" target="_blank" rel="noopener noreferrer" className="projectbtn" aria-label="button to code review">Code</a>
        </div>

        <div className="project2">
          <h3 className="projTitle2">Lesfic Repository</h3>
          <img className="projimg" src={LesficRepo} alt="Lesfic Repository landing page" title="Lesfic Repository" />
          <p className="proj2">For readers of genres that don't make the mainstream marketing cut, it can be tough to find the books that you're looking for when searching places like Amazon. I'm both a reader and writer of lesbian fiction (lesfic) and I've searched countless times for new works in lesbian paranormal fiction and come up with countless books featuring men. Not what I asked for-thanks anyway.</p>
          <p className="proj2">Frustration with a lack of a solid catalogue of strictly stories that feature women who identify as lesbians became a goal to create such a repository. I'm planning on crowd-sourcing the work of filling the database to the Golden Crown Literary Society-an Organization I've been a proud member of for years and whose sole mission is to promote the entrie genre od lesbian writing.</p>
          <div className="btnWrap">
          <a href="https://lesfic-rate-your-reads-git-master.jeaninehoffman.now.sh/" target="_blank" rel="noopener noreferrer"
            className="trybtn"
            aria-label="lesfic app button">Try it</a>
          <a href="https://github.com/JeanineHoffman/LesFic-Rate-Your-Reads.git" target="_blank" rel="noopener noreferrer" className="projectbtn" aria-label="button to code review">Client</a>
          <a href="https://github.com/JeanineHoffman/lesfic-server.git" target="_blank" rel="noopener noreferrer" className="projectbtn" aria-label="button to code review">Server</a>
          </div>
        </div>
        <div className="project3">
          <h3 className="projTitle3">The Community Toolbox</h3>
          <img className="projimg" src={Toolbox} alt="Screenshot of The Community Toolbox app" title="The Community Toolbox" />
          <p className="proj3"> The Community Toolbox is an app that allows community-run lending libraries work more efficiently in their areas. With slight adaptations the app is designed to help users find the tools they need for home improvement and garden/lawn care tasks without the investment cost and need for storage of seldom used, bulky tools.</p>
          <p className="proj3">This was a team Capstone project during which I worked as project manager for my five person team. We thankfully had a team member well versed in design. In three weeks we managed to do a prety extensive app involving predictive text search, building a multi table database, public and private routing, JWT auth, and integrated the use of Cloudinary and Google Maps API. Our demo is availble with the user name and password as Demo.</p>
          <div className="btnWrap">
          <a href="https://toolbox-client-git-master.teamredpanda.now.sh/" target="_blank" rel="noopener noreferrer" className="trybtn" aria-label="Toolbox app button">Try it</a>
          <a href="https://github.com/CommunityTB/toolbox-client.git" target="_blank" rel="noopener noreferrer" className="projectbtn" aria-label="button to code review">Client</a>
          <a href="https://github.com/CommunityTB/toolbox-server.git" target="_blank" rel="noopener noreferrer"
            className="projectbtn" aria-label="button to code review">Server</a>
            </div>
        </div>

      </div>
    );
  }
}