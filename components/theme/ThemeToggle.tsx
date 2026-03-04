"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Loader2 } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return <Button variant="ghost" size="icon" onClick={toggleTheme}><Loader2 className="animate-spin" /></Button>;
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}

export default ThemeToggle;
