'use client'

import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes';

function Profile() {
  
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Image src='/images/Portrait.jpg' alt='Duane Cabahug Profile Image' width={200} height={200} className='xl:w-64 xl:h-w-64 rounded-full border-8 border-primary' />
      <h1 className='text-4xl xl:text-5xl font-bold'>Duane Cabahug</h1>
      <p className='text-xl xl:text-2xl'>Full Stack Developer</p>
    </div>
  )
}

export default Profile