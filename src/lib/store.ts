import { useEffect } from "react";
import { create } from "zustand";

type Store = {
  isDarkMode: boolean;
  toggleDark: () => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const useStore = create<Store>()((set) => {
  return {
    isDarkMode: false,
    toggleDark: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    setIsDarkMode: (isDarkMode) => set((state) => ({ isDarkMode })),
  };
});

export const useDarkMode = () => {
  const { isDarkMode, toggleDark, setIsDarkMode } = useStore();

  // useStore에서 바로 window 객체의 존재 여부를 파악하며 isDarkMode를 결정지을 경우
  // 서버사이드 렌더링과 클라이언트 사이드 렌더링의 초기 상태 차이로 인해 오류를 발생시킴
  // 먼저 상태 생성 후 -> useEffect 훅으로 시스템 설정을 확인
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDarkMode = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // 초기 상태 설정
    setIsDarkMode(mediaQueryList.matches);

    // 리스너 등록
    mediaQueryList.addEventListener("change", updateDarkMode);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      mediaQueryList.removeEventListener("change", updateDarkMode);
    };
  }, []);

  return { isDarkMode, toggleDark };
};

export default useStore;
