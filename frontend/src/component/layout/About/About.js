import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Typography><h1>Sairakesh</h1></Typography>
            <span>
              This is a Ecommerce wesbite made by me where we can use this website to buy good products
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our github</Typography>
            <a
              href="https://www.github.com"
              target="blank"
            >
              <GitHubIcon className="AiFillGithub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
