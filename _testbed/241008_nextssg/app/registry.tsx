"use client";

import { useMatchMedia } from "@/lib/store";

export function DarkModeRegistry({ children }: { children: React.ReactNode }) {
  useMatchMedia();

  return <>{children}</>;
}
