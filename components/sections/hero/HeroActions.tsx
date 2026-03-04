import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { ArrowDown, File, Mail } from "lucide-react";
import Link from "next/link";

function HeroActions() {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.4}
    >
      <Button variant="default" asChild>
        <Link href="/#projects">
        <ArrowDown />
          View Projects
        </Link>
      </Button>
      
      <Button variant="outline" asChild>
        <Link href="/Duane_Cabahug_Resume.pdf" target="_blank" rel="noopener noreferrer" >
          <File /> Download Resume
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="mailto:duanecabahug6@gmail.com">
          <Mail /> Contact
        </Link>
      </Button>
    </motion.div>
  );
}

export default HeroActions;
