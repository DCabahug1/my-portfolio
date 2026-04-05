import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import ThemeToggle from "../theme/ThemeToggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center w-full bg-background border-b border-border p-4">
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Branding */}
        <Link href="/#hero">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="ml-3 w-6 h-6 invert dark:invert-0"
          />
        </Link>
        {/* Nav Items */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#skills">Skills</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#experience">Experience</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#projects">Projects</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="mailto:duanecabahug6@gmail.com">Contact</Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/#about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#skills">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#experience">Experience</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/#projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="bg-primary text-primary-foreground"
                  asChild
                >
                  <Link href="mailto:duanecabahug6@gmail.com">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
