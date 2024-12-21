import React, { CSSProperties, useMemo } from "react";
import classnames from "classnames/bind";
import useCalendarStore from "@/store/useCalendarStore";
import styles from "./DateItem.module.scss";
const cx = classnames.bind(styles);

type Props = {
  month: number;
  date: number;
};

const DateItem = (props: Props) => {
  const { month, date } = props;
  const { year, holidays } = useCalendarStore();

  const dateTime = `${year}-${String(month).padStart(2, "0")}-${String(
    date + 1
  ).padStart(2, "0")}`;
  const holidayName = useMemo(() => {
    return holidays
      .filter((e) => e.date == dateTime)
      .map((e) => e.name)
      .join(" ");
  }, [dateTime, holidays]);

  const dayNum = new Date(year, month - 1, 1).getDay();
  const dateStyle = {
    gridColumn: date === 0 && dayNum + 1,
    color:
      (date + dayNum) % 7 === 0
        ? "#e03563"
        : (date + dayNum + 1) % 7 === 0
        ? "#0074bc"
        : undefined,
  } as CSSProperties;

  return (
    <div
      className={cx("date_item", holidayName && "holiday")}
      style={dateStyle}
    >
      <time dateTime={dateTime}>{date + 1}</time>
      {holidayName && <span className={cx("name")}>{holidayName}</span>}
    </div>
  );
};

export default DateItem;
