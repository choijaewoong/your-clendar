import React, { useRef } from "react";
import classnames from "classnames/bind";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InputAdornment from "@mui/material/InputAdornment";
import useCalendarStore from "../../store/useCalendarStore";

import styles from "./InputYear.module.scss";
const cx = classnames.bind(styles);

const InputYear = () => {
  const { year, setYear } = useCalendarStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const minYear = 1;
    const maxYear = 2050;
    const inputYear = inputRef.current?.value
      ? inputRef.current?.value
      : "2025";
    const year = Math.min(maxYear, Math.max(Number(inputYear), minYear));
    if (inputRef.current) inputRef.current.value = String(year);
    setYear(year);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={updateCalendar}
    >
      <TextField
        className={cx("input_inner")}
        label="Year"
        defaultValue={year}
        color="secondary"
        variant="standard"
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default InputYear;
