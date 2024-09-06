"use client";

import { WS_PORT } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

let AutoRefresh = function ({ children }: { children: React.ReactNode }) {
  return children;
};

if (process.env.NODE_ENV === "development") {
  AutoRefresh = function ({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    useEffect(() => {
      console.log("[MarkdownWatcher] :: agent working 🤖");
      const ws = new WebSocket(`ws://localhost:${WS_PORT}`);

      ws.onopen = (event) => {
        console.log("[MarkdownWatcher] :: Connection opened");
      };

      ws.onmessage = (event) => {
        console.log(`[MarkdownWatcher] :: Data from server : ${event.data}`);
        if (event.data === "refresh") {
          router.refresh();
        }
      };
      return () => {
        ws.close();
      };
    }, [router]);

    return children;
  };
}

export default AutoRefresh;
