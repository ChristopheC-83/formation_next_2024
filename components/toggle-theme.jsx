"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ToggleTheme() {

   const {theme, setTheme} = useTheme()
   
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="flex justify-center align-items"
      >
        <Moon className="w-6 h-6 transition scale-100 dark:scale-0" />
        <Sun className="w-6 h-6 transition scale-0 dark:scale-100" />
      </Button>
    </div>
  );
}