import { motion } from "motion/react";
import { fadeUp } from "./variants";

function HeroText() {
  return (
    <>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-medium"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Duane Cabahug
      </motion.h1>
      <motion.h2
        className="text-primary text-xl md:text-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        Software Engineer
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-base md:text-lg max-w-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        Computer Science student building AI-powered web applications and
        scalable full-stack systems.
      </motion.p>
    </>
  );
}

export default HeroText;
