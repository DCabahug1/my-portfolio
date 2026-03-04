import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-3 py-8 border-t border-border">
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/duane-cabahug/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="size-4" />
        </Link>
        <Link
          href="https://github.com/DCabahug1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="size-4" />
        </Link>
        <Link
          href="mailto:duanecabahug6@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <Mail className="size-4" />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        Duane Cabahug &nbsp;·&nbsp; Software Engineer
      </p>
    </footer>
  );
}

export default Footer;
