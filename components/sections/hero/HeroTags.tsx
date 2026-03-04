import { motion } from "motion/react";
import { fadeUp } from "./variants";
import TagItem from "./TagItem";

function HeroTags() {
  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-start gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.3}
    >
      <TagItem content="CSUN Computer Science" />
      <TagItem content="Full-Stack Engineer" />
      <TagItem content="AI Enthusiast" />
    </motion.div>
  );
}

export default HeroTags;
