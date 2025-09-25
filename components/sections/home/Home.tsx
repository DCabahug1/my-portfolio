"use client";

import React from "react";
import Profile from "./Profile";
import About from "./About";

function Home() {
  return (
    <div
      id="home"
      className="flex items-center justify-center gap-12 h-screen w-full"
    >
      <Profile />
      <div className="hidden xl:block">
        <About />
      </div>
    </div>
  );
}

export default Home;
