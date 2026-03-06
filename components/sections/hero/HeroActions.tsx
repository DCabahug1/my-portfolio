import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { ArrowDown, File, Mail } from "lucide-react";
import Link from "next/link";

function HeroActions() {
  return (
    <motion.div
      className="flex flex-row flex-wrap justify-center sm:justify-start gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.4}
    >
      <Button variant="default" size="sm" className="rounded-full px-4" asChild>
        <Link href="/#projects">
          <ArrowDown className="size-3.5" />
          View Projects
        </Link>
      </Button>

      <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
        <Link href="/Duane_Cabahug_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <File className="size-3.5" /> Resume
        </Link>
      </Button>

      <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
        <Link href="mailto:duanecabahug6@gmail.com">
          <Mail className="size-3.5" /> Contact
        </Link>
      </Button>
    </motion.div>
  );
}

export default HeroActions;
