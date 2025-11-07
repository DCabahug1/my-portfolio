
"use client";
import React from 'react'
import Experience from './Experience'
import { experienceList } from '@/lib/data/experiences'
import {motion} from 'motion/react'

function ExperienceList() {
  return (
    <motion.div className=' flex flex-col items-center'
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    viewport={{once: true}}
    >
      <h1 id="experience" className='text-3xl font-bold mb-4'>Experience</h1>
      {experienceList.map((experience, index) => (
        <Experience key={index} experience={experience} isEnd={index === experienceList.length - 1} />
      ))}
    </motion.div>
  )
}

export default ExperienceList