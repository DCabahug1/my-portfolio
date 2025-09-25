"use client";

import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';
import Home from '@/components/sections/home/Home';
import React from 'react'


function page() {
  return (
    <div className='flex flex-col items-center font-sans'>
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}

export default page