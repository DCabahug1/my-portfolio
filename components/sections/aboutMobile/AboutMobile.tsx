'use client'

import React from 'react'
import About from '../home/About'
import {motion} from "motion/react";

function AboutMobile() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{once: true, amount: 0.2}}
    >
    <div id="about-mobile" className='xl:hidden p-8'>
      <About />
    </div>
    </motion.div>
  )
}

export default AboutMobile