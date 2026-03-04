import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { ArrowDown, File, Mail } from "lucide-react";

function HeroActions() {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.4}
    >
      <Button variant="default">
        <ArrowDown />
        View Projects
      </Button>
      <Button variant="outline">
        <File /> Download Resume
      </Button>
      <Button variant="outline">
        <Mail /> Contact
      </Button>
    </motion.div>
  );
}

export default HeroActions;
