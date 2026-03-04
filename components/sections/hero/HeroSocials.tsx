import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

function HeroSocials() {
  return (
    <motion.div
      className="flex flex-row gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.5}
    >
      <Button variant="ghost">
        <Linkedin /> <span className="hidden md:block">LinkedIn</span>
      </Button>
      <Button variant="ghost">
        <Github /> <span className="hidden md:block">GitHub</span>
      </Button>
      <Button variant="ghost">
        <Mail /> <span className="hidden md:block">Email</span>
      </Button>
    </motion.div>
  );
}

export default HeroSocials;
