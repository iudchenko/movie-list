import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export default function useDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useLocalStorageState(
    prefersDarkMode,
    "useDarkMode"
  );

  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
