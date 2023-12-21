import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { moon, sun } from "./paths";
import { useFlubber } from "@/hooks/use-flubber";

const paths = [moon, sun];

export const ThemeSwitcher = () => {
  const prefersDarkModeMedia = window.matchMedia(
    "(prefers-color-scheme: dark)",
  );
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    prefersDarkModeMedia.matches,
  );

  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.15,
      ease: "easeIn",
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  useEffect(() => {
    if (isDarkMode) {
      setPathIndex(0);
      document.documentElement.classList.add("dark");
    } else {
      setPathIndex(1);
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

      <svg className="fill-white/87 h-10 w-10">
        <g>
          <motion.path d={path} />
        </g>
      </svg>
    </label>
  );
};
