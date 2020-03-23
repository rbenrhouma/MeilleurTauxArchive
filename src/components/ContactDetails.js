import React from "react";

import email from "../assets/visuel-desktop-email.jpg";

import "./style.css";

const ContactDetails = props => {
  console.log(email);
  return (
    <div className="goodLocalisation">
      <img src={email} alt={"visuel-desktop-email"} />
    </div>
  );
};
export default ContactDetails;
