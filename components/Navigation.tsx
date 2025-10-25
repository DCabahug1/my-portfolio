"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

function NavBar() {
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
    {
      name: "Contact",
      href: "contact",
    },

  ];

  const handleScroll = (href: string) => {
    console.log("Clicked, looking for:", href);
    console.log("Full selector:", `#${href}`);

    // Add # for querySelector since IDs need it for selection
    const element = document.querySelector(`#${href}`);
    console.log("Found element:", element);

    if (element) {
      console.log("Scrolling to element");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("Element not found!");
    }
  };

  return (
    <div className="fixed flex items-center justify-between top-0 z-50 w-full p-4">
      {/* Desktop */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {buttons.map((button, index) => {
              return (
                <NavigationMenuItem key={`button-${index}`}>
                  <NavigationMenuLink className="cursor-pointer" asChild>
                    <button onClick={() => handleScroll(button.href)}>
                      {button.name}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              {buttons.map((button, index) => (
                <SheetClose
                  asChild
                  key={`mobile-${index}`}
                  className="hover:bg-accent"
                >
                  <button
                    onClick={() => handleScroll(button.href)}
                    className="text-left px-4 py-2 hover:text-primary transition-colors"
                  >
                    {button.name}
                  </button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default NavBar;
