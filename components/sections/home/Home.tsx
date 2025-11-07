"use client";

import {motion} from "motion/react";

import React from "react";
import Profile from "./Profile";
import About from "./About";

function Home() {
  return (
    <motion.div
      id="home"
      className="flex items-center justify-center gap-12 h-screen min-h-screen w-full"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      <Profile />
      <div className="hidden xl:block">
        <About />
      </div>
    </motion.div>
  );
}

export default Home;
