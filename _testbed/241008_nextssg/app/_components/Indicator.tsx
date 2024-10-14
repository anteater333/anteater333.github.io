"use client";

import { useDarkMode } from "@/lib/store";

function Indicator() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`indicator ${isDarkMode ? "dark" : "light"}`}>
      {isDarkMode ? "어두운" : "밝은"}
    </div>
  );
}

export default Indicator;
