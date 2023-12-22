import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import SunIcon from "@icons/sun.svg?react";
import MoonIcon from "@icons/moon.svg?react";

export const ThemeSwitcher = () => {
  const prefersDarkModeMedia = window.matchMedia(
    "(prefers-color-scheme: dark)",
  );
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    prefersDarkModeMedia.matches,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <label htmlFor="switch" className="cursor-pointer">
      <input
        id="switch"
        type="checkbox"
        className="hidden"
        checked={isDarkMode}
        value="dark"
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <SunIcon className="dark:inline-block hidden" />
      <MoonIcon className="dark:hidden inline-block" />
    </label>
  );
};
