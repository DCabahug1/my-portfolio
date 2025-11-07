"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function ThemeToggle({ isScrolled }: { isScrolled: boolean }) {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (systemTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        className={`cursor-pointer rounded-full ${isScrolled ? "text-black hover:bg-black/10" : ""}`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}

export default ThemeToggle;
