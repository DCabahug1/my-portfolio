"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageElement = document.getElementById("page");
      const scrollPosition = pageElement?.scrollTop;
      if (scrollPosition && scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const pageElement = document.getElementById("page");
    if (pageElement) {
      console.log("Element found!");

      pageElement.addEventListener("scroll", handleScroll);

      return () => {
        pageElement.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("Element not found!");
    }
  }, []);

  const buttons = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "Experience",
      href: "experience",
    },
    {
      name: "Projects",
      href: "projects",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 z-50 flex items-center justify-between w-full ${
        isScrolled ? "p-4" : "p-0"
      } transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between w-full xl:w-min px-4  py-2 transition-colors duration-300  rounded-full backdrop-blur-sm ${
          isScrolled ? "bg-white/90 shadow-xl" : ""
        }`}
      >
        {/* Desktop */}
        <div className="hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {buttons.map((button, index) => {
                return (
                  <NavigationMenuItem key={`button-${index}`}>
                    <NavigationMenuLink className="cursor-pointer" asChild>
                      <Button
                        variant="ghost"
                        onClick={() => handleScroll(button.href)}
                        className={`${
                          isScrolled
                            ? "text-black! hover:bg-black/10!"
                            : ""
                        } rounded-full! p-4!`}
                      >
                        {button.name}
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile */}
        <div className="flex sm:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-6">
                <SheetTitle></SheetTitle>
                {buttons.map((button, index) => (
                  <SheetClose
                    asChild
                    key={`mobile-${index}`}
                    className="hover:bg-accent"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 * (index + 1) }}
                      className="w-full"
                    >
                      <Button
                        onClick={() => handleScroll(button.href)}
                        className="text-left px-4 py-2 bg-white text-black hover:text-primary transition-colors w-full"
                      >
                        {button.name}
                      </Button>
                    </motion.div>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className={`flex xl:hidden items-center`}>
          <ThemeToggle isScrolled={isScrolled} />
        </div>
      </div>
      {/* Separated Button for Desktop */}
      <div
        className={`hidden xl:flex items-center p-2 transition-colors duration-300 rounded-full backdrop-blur-sm ${
          isScrolled ? "bg-white/90 text-black shadow-xl max-w-lg" : ""
        }`}
      >
        <ThemeToggle isScrolled={isScrolled} />
      </div>
    </div>
  );
}

export default NavBar;
