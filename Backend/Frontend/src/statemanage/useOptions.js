import { create } from "zustand";

const useOptions = create((set) => ({
  selectedOption: 1,
  setSelectedOption: (selectedOption) =>
    set({ selectedOption }),
}));
export default useOptions;
