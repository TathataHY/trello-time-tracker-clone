import { create } from "zustand";

type Store = {
  user: string;
  setUser: (user: string) => void;
};

const useStore = create<Store>((set) => ({
  user: localStorage.getItem("user") || "Tathata",
  setUser: (user) => set({ user }),
}));

export { useStore };
