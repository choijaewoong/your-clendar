import { Holiday } from "@/config/types";
import { create } from "zustand";
import holidaysData from "@/data/holidays.json";

interface CalendarState {
  year: number;
  holidays: Holiday[];
  setYear: (year: number) => void;
  setHolidays: (year: number) => void;
}
const useCalendarStore = create<CalendarState>((set) => ({
  year: 2025,
  holidays: [],
  setYear: (year: number) => set({ year: year }),
  setHolidays: (year: number) => {
    return set({
      holidays:
        holidaysData.find((e) => {
          return e.year == year;
        })?.holidayList || [],
    });
  },
}));

export default useCalendarStore;
