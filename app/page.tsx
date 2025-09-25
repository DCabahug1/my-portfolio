"use client";

import React from 'react'


function page() {
  return (
    <div className='bg-background text-foreground flex flex-col items-center overflow-y-auto'>
      <div id="home" className='flex items-center justify-center h-screen w-full bg-red-500'>
        Home
      </div>
      <div id="projects" className='flex items-center justify-center h-screen w-full bg-green-500'>
        Projects
      </div>
      <div id="contact" className='flex items-center justify-center h-screen w-full bg-blue-500'>
        Contact
      </div>
    </div>
  )
}

export default page