import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import ThemeToggle from "../theme/ThemeToggle";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center w-full bg-background border-b border-border p-4">
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Branding */}
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-6 h-6 invert dark:invert-0"
          />
        </Link>
        {/* Nav Items */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Skills</Button>
            <Button variant="ghost">Experience</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="default">Contact</Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Skills</DropdownMenuItem>
                <DropdownMenuItem>Experience</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
                <DropdownMenuItem className="bg-primary text-primary-foreground">Contact</DropdownMenuItem>
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
