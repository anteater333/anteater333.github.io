"use client";

import { useDarkMode } from "@/lib/store";

function ToggleButton() {
  const { isDarkMode, toggleDark } = useDarkMode();

  return (
    <button
      className={`toggle-button ${isDarkMode ? "light" : "dark"}`}
      onClick={toggleDark}
    >
      토글
    </button>
  );
}

export default ToggleButton;
