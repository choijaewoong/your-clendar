import React, { useEffect } from "react";
import classnames from "classnames/bind";
import monthInfoData from "@/data/monthInfo.json";
import { CalendarType } from "@/config/enums";
import useControlsStore from "@/store/useControlsStore";
import useCalendarStore from "@/store/useCalendarStore";
import MonthItem from "@/components/MonthItem/MonthItem";

import styles from "./Calendar.module.scss";
const cx = classnames.bind(styles);

const Calendar = () => {
  const { year, setHolidays } = useCalendarStore();
  const { calendarType, calendarFont } = useControlsStore();
  const MonthList = (
    <>
      {calendarType === CalendarType.mini
        ? Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className={cx("month_multi")}>
              <MonthItem monthInfo={monthInfoData[idx]} />
              <MonthItem monthInfo={monthInfoData[idx + 1]} />
            </div>
          ))
        : Array.from({ length: 12 }).map((_, idx) => (
            <MonthItem monthInfo={monthInfoData[idx]} />
          ))}
    </>
  );

  useEffect(() => {
    setHolidays(year);
  }, [setHolidays, year]);

  return (
    <div className={cx("calendar_wrap", calendarFont, calendarType)}>
      {MonthList}
    </div>
  );
};

export default Calendar;
