"use client";

import React from 'react'


function page() {
  return (
    <div className='flex flex-col items-center font-sans'>
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