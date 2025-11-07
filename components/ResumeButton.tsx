"use client";

import React from 'react'
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function ResumeButton() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className="w-48 h-min text-xl hover:shadow-[0_0_20px_0_#000] hover:shadow-primary/80 m-8 cursor-pointer">
          <a href="/Duane_Cabahug_Resume.pdf" target="_blank">
            View Resume
          </a>
          <FontAwesomeIcon icon={faFile} />
        </Button>
      </motion.div>
  )
}

export default ResumeButton