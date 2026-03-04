import { motion } from "motion/react";
import Image from "next/image";

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
    >
      <Image
        src="/images/Portrait2.jpg"
        alt="Portrait"
        width={500}
        height={800}
        className="rounded-lg h-72 w-56 sm:h-80 sm:w-64 md:h-96 md:w-72 object-cover border-2 border-primary shadow-lg grayscale-25 transition-all duration-300"
      />
    </motion.div>
  );
}

export default HeroPortrait;
