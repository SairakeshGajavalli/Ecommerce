import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:koppu.abhishek@cognizant.com">
        <Button>Contact: koppu.abhishek@cognizant.com</Button>
      </a>
      <a className="mailBtn" href="mailto:sairakesh.gajavalli@cognizant.com">
        <Button>sairakesh.gajavalli@cognizant.com</Button>
      </a>
      <a className="mailBtn" href="mailto:saidharani.miriyala@cognizant.com">
        <Button>Contact: saidharani.miriyala@cognizant.com</Button>
      </a>
      <a className="mailBtn" href="mailto:sasidhar.rachumallu@cognizant.com">
        <Button>Contact: sasidhar.rachumallu@cognizant.com</Button>
      </a>
    </div>
  );
};

export default Contact;
