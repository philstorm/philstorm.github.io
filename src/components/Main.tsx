import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/Facetune_06-03-2023-08-25-16.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Phillip Afuwape" style={{ width: '200px', borderRadius: '100px' }} />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/philstorm" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/phillipafuwape" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Phillip Afuwape</h1>
          <p>Cybersecurity -  GRC Analyst & AI Governance </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/philstorm" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
            <a href="https://linkedin.com/in/phillipafuwape" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;