"use client";

import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex items-center justify-center h-min p-8 w-full"
    >
      <div className="  flex gap-16 h-min w-min">
        <a href="mailto:duanecabahug6@gmail.com" target="_blank" className="">
          <i className="fa-solid fa-envelope text-6xl hover:text-primary transition-all duration-200"></i>
        </a>
        <a href="https://github.com/dcabahug1" target="_blank">
          <i className="fa-brands fa-github text-6xl hover:text-primary transition-all duration-200"></i>
        </a>
        <a href="https://linkedin.com/in/duane-cabahug" target="_blank">
          <i className="fa-brands fa-linkedin text-6xl hover:text-primary transition-all duration-200"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
