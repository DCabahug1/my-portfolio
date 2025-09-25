"use client";

import React from 'react'


function page() {
  return (
    <div className='bg-background text-foreground flex flex-col items-center overflow-y-auto  font-sans transition-all duration-300'>
      <div id="home" className='flex items-center justify-center h-screen w-full'>
        Home
      </div>
      <div id="projects" className='flex items-center justify-center h-screen w-full'>
        Projects
      </div>
      <div id="contact" className='flex items-center justify-center h-screen w-full'>
        Contact
      </div>
    </div>
  )
}

export default page