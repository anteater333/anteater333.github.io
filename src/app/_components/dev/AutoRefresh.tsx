"use client";

import { WS_PORT } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

let AutoRefresh = function ({ children }: { children: React.ReactNode }) {
  return children;
};

const MD_WATCHER_PREFIX = "[MarkdownWatcher]";

if (process.env.NODE_ENV === "development") {
  AutoRefresh = function ({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    useEffect(() => {
      console.log(`${MD_WATCHER_PREFIX} :: agent working 🤖`);
      const ws = new WebSocket(`ws://localhost:${WS_PORT}`);

      ws.onopen = (event) => {
        console.log(`${MD_WATCHER_PREFIX} :: Connection opened`);
      };

      ws.onmessage = (event) => {
        console.log(`${MD_WATCHER_PREFIX} :: Data from server : ${event.data}`);
        if (event.data === "refresh") {
          router.refresh();
        }
      };

      ws.onclose = (event) => {
        console.log(`${MD_WATCHER_PREFIX} :: Connection closed`);
      };
    }, []);

    return children;
  };
}

export default AutoRefresh;
