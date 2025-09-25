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

function NavBar() {
  const buttons = [
    {
      name: "Home",
      href: "home",
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
    <div className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      {/* Desktop */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {buttons.map((button, index) => {
              return (
                <NavigationMenuItem
                  className="cursor-pointer"
                  key={`button-${index}`}
                >
                  <NavigationMenuLink asChild>
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
      <div className="flex md:hidden p-4">
        {buttons.map((button, index) => (
          <button
            key={`mobile-${index}`}
            onClick={() => handleScroll(button.href)}
            className="px-4 py-2 hover:text-primary transition-colors"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
