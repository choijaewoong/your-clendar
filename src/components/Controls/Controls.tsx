import React from "react";
import classnames from "classnames/bind";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import useControlsStore from "../../store/useControlsStore";
import { CalendarType, FontFamilyType } from "../../config/enums";

import styles from "./Controls.module.scss";
const cx = classnames.bind(styles);

const Controls = () => {
  const { calendarType, setCalendarType } = useControlsStore();
  const { calendarFont, setCalendarFont } = useControlsStore();

  const handleCalendarType = (
    event: React.MouseEvent<HTMLElement>,
    value: CalendarType
  ) => {
    if (value !== null) {
      setCalendarType(value);
    }
  };
  const handleFontType = (
    event: React.MouseEvent<HTMLElement>,
    value: FontFamilyType
  ) => {
    if (value !== null) {
      setCalendarFont(value);
    }
  };

  return (
    <div className={cx("controls_wrap")}>
      <div className={cx("controls_inner")}>
        <em className={cx("name")}>Calendar Type</em>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={calendarType}
          exclusive
          onChange={handleCalendarType}
        >
          {Object.entries(CalendarType).map(([key, value]) => (
            <ToggleButton value={value}>{key}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className={cx("controls_inner")}>
        <em className={cx("name")}>Font Type</em>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={calendarFont}
          exclusive
          onChange={handleFontType}
        >
          {Object.entries(FontFamilyType).map(([key, value]) => (
            <ToggleButton value={value}>{key}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Controls;
