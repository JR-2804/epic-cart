import { useEffect, useState } from "react";
import MoonIcon from "./icons/moon-icon";
import SunIcon from "./icons/sun-icon";

const ToggleThemeButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("color-theme")
    ) {
      return localStorage.getItem("color-theme");
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark";

    localStorage.setItem("color-theme", newTheme);
    setTheme(newTheme);
  };

  return isMounted ? (
    <button
      type="button"
      className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme == "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  ) : (
    <></>
  );
};

export default ToggleThemeButton;
