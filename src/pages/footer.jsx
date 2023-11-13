import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Footer() {
  return (
<footer id="footer">
      <div className="left-content">
        Incented Protocol Inc. ©2023 All Rights Reserved.
      </div>
      <div className="right-content">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-logo.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-logo.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="/github-logo.png" alt="GitHub" className="social-icon" />
        </a>
      </div>
    </footer>
 
  );
}

export default Footer;