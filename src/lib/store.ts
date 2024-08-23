import { create } from "zustand";

type Store = {
  isDarkMode: boolean;
  toggleDark: () => void;
};

const useStore = create<Store>()((set) => ({
  isDarkMode: false,
  toggleDark: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
