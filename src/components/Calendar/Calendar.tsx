import React, { useEffect } from "react";
import classnames from "classnames/bind";
import monthInfoData from "@/data/monthInfo.json";
import MonthItem from "@/components/MonthItem/MonthItem";

import styles from "./Calendar.module.scss";
import useCalendarStore from "@/store/useCalendarStore";
const cx = classnames.bind(styles);

const Calendar = () => {
  const { year, setHolidays } = useCalendarStore();
  const MonthList = (
    <>
      {Array.from({ length: 12 }).map((_, idx) => (
        <MonthItem monthInfo={monthInfoData[idx]} />
      ))}
    </>
  );

  useEffect(() => {
    setHolidays(year);
  }, [setHolidays, year]);

  return <div className={cx("calendar_wrap")}>{MonthList}</div>;
};

export default Calendar;
