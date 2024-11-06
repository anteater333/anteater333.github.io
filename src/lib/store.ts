import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  isDarkMode: boolean;
  toggleDark: () => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      isDarkMode:
        typeof window !== "undefined" &&
        typeof localStorage.getItem("theme-storage") === "string"
          ? JSON.parse(localStorage.getItem("theme-storage") as string)[
              "state"
            ]["isDarkMode"]
          : false,
      toggleDark: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setIsDarkMode: (isDarkMode) => set((state) => ({ isDarkMode })),
    }),
    { name: "theme-storage" }
  )
);

export const useMatchMedia = () => {
  const { setIsDarkMode } = useStore();

  // useStore에서 바로 window 객체의 존재 여부를 파악하며 isDarkMode를 결정지을 경우
  // 서버사이드 렌더링과 클라이언트 사이드 렌더링의 초기 상태 차이로 인해 오류를 발생시킴
  // 먼저 상태 생성 후 -> useEffect 훅으로 시스템 설정을 확인
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDarkMode = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // 로컬 스토리지에 저장된 테마 상태값이 없다면 시스템 설정을 가져온다.
    if (!localStorage.getItem("theme-storage"))
      setIsDarkMode(mediaQueryList.matches);

    // 리스너 등록
    mediaQueryList.addEventListener("change", updateDarkMode);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      mediaQueryList.removeEventListener("change", updateDarkMode);
    };
  }, []);
};

export const useDarkMode = () => {
  const { isDarkMode, toggleDark } = useStore();

  return { isDarkMode, toggleDark };
};

export default useStore;
