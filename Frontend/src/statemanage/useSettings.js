import { create } from "zustand";

const useSettings = create((set) => ({
  selectedSetting: "none",
  setSelectedSetting: (selectedSetting) =>
    set({ selectedSetting }),
}));
export default useSettings;
