"use client";

import { useDarkMode } from "@/lib/store";

export default function ThemeToggle({}) {
  const { isDarkMode, toggleDark } = useDarkMode();

  return (
    <div>
      <button onClick={() => toggleDark()}>
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
}
