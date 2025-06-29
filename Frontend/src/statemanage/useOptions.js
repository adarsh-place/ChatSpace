import { create } from "zustand";

const useOptions = create((set) => ({
  selectedOption: "chats",
  setSelectedOption: (selectedOption) =>
    set({ selectedOption }),
}));
export default useOptions;
