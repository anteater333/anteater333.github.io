"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RouterObserver() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = (event: PopStateEvent) => {
      console.log("🎀");
      console.log("App is changing to: ", event);
      console.log("🎀");
      // 필요한 경우 상태를 업데이트하거나 추가 작업 수행
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname, searchParams]);

  return <></>;
}
