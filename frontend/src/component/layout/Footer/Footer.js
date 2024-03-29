import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () =>{
    return (
      <footer id="footer">
          <div className="leftFooter">
              <h4>DOWNLOAD OUR APP</h4>
              <p>Download App for Android and IOS</p>
              <img src={playstore} alt="playstore" />
              <img src={appstore} alt="appstore" />
          </div>

          <div className="midFooter">
              <h1>Ecommerce</h1>
              <p>Copyright 2022 &copy; Sairakesh </p>

          </div>

          <div className="rightFooter">
              <h4>Follow Us</h4>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.linkedin.com/">Linkedin</a>
              <a href="https://github.com/">Github</a>
          </div>
      </footer>
    );
};

export default Footer;
