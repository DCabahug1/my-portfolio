"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/components/sections/hero/variants";
import { Button } from "@/components/ui/button";
import { File, Mail } from "lucide-react";
import Link from "next/link";

function CTA() {
  return (
    <section className="w-full flex flex-col items-center gap-5 py-20 text-center">
      <motion.div
        className="flex flex-col items-center gap-3"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-md">
          I&apos;m currently looking for internship and full-time opportunities
          in software engineering.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.15}
      >
        <Button asChild variant="default">
          <Link href="/resume/Duane_Cabahug_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <File className="size-4" />
            Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="mailto:duanecabahug6@gmail.com">
            <Mail className="size-4" />
            Contact
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

export default CTA;
