import React, { useMemo } from "react";
import classnames from "classnames/bind";
import DateItem from "../DateItem/DateItem";
import useCalendarStore from "../../store/useCalendarStore";

import styles from "./MonthItem.module.scss";
import { Month } from "@/config/types";
import useControlsStore from "@/store/useControlsStore";
import { CalendarType } from "@/config/enums";
const cx = classnames.bind(styles);

type Props = {
  monthInfo: Month;
};

const MonthItem = (props: Props) => {
  const { monthInfo } = props;
  const { year } = useCalendarStore();
  const { calendarType } = useControlsStore();
  const lastDate = useMemo(
    () => new Date(year, monthInfo.month, 0).getDate(),
    [year, monthInfo]
  );

  return (
    <div className={cx("month_wrap")}>
      <div className={cx("head_area")}>
        <em className={cx("month_num")}>
          {calendarType === CalendarType.default
            ? monthInfo.month
            : monthInfo.month.toString().padStart(2, "0")}
        </em>
        {calendarType === CalendarType.vertical && (
          <span className={cx("month_word")}>{monthInfo.phrase}</span>
        )}
        <span className={cx("month_name")}>
          <span className={cx("year")}>{year}</span>
          {monthInfo.monthName}
        </span>
      </div>
      <div className={cx("content_area")}>
        <div className={cx("day_area")}>
          <span className={cx("day")}>Sun</span>
          <span className={cx("day")}>Mon</span>
          <span className={cx("day")}>Tue</span>
          <span className={cx("day")}>Wed</span>
          <span className={cx("day")}>Thu</span>
          <span className={cx("day")}>Fri</span>
          <span className={cx("day")}>Sat</span>
        </div>
        <div className={cx("date_area")}>
          {[...Array(lastDate)].map((_, date) => (
            <DateItem key={date} date={date} month={monthInfo.month} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthItem;
