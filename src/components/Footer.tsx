import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/CyberRoshan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/roshanchaurasia" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>All Right Reserved by <a href="https://github.com/CyberRoshan" target="_blank" rel="noreferrer">Roshan Chaurasia</a> with 🧡</p>
    </footer>
  );
}

export default Footer;