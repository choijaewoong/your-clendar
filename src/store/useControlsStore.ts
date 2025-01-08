import { CalendarType, FontFamilyType } from "../config/enums";
import { create } from "zustand";

interface ControlsState {
  calendarType: CalendarType;
  calendarFont: FontFamilyType;
  setCalendarType: (type: CalendarType) => void;
  setCalendarFont: (font: FontFamilyType) => void;
}
const useControlsStore = create<ControlsState>((set) => ({
  calendarType: CalendarType.phrase,
  calendarFont: FontFamilyType.lineseed,
  setCalendarType: (type: CalendarType) => set({ calendarType: type }),
  setCalendarFont: (font: FontFamilyType) => set({ calendarFont: font }),
}));

export default useControlsStore;
