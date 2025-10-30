"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div
      id="contact"
      className="flex items-center justify-center h-min p-8 w-full"
    >
      <div className="  flex gap-16 h-min w-min">
        <a href="mailto:duanecabahug6@gmail.com" target="_blank" className="">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" className="hover:opacity-70" />
        </a>
        <a href="https://github.com/dcabahug1" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2xl" className="hover:opacity-70" />
        </a>
        <a href="https://linkedin.com/in/duane-cabahug" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="hover:opacity-70" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
