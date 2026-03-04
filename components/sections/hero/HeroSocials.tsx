import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function HeroSocials() {
  return (
    <motion.div
      className="flex flex-row gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.5}
    >
      <Button variant="ghost" asChild>
        <Link href="https://www.linkedin.com/in/duane-cabahug/" target="_blank" rel="noopener noreferrer">
          <Linkedin /> <span className="hidden md:block">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="https://github.com/DCabahug1" target="_blank" rel="noopener noreferrer">
          <Github /> <span className="hidden md:block">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="mailto:duanecabahug6@gmail.com">
          <Mail /> <span className="hidden md:block">Email</span>
        </Link>
      </Button>
    </motion.div>
  );
}

export default HeroSocials;
