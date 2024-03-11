import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import colors from "../utils/Colors";
import InputDates from "./InputDates";
import Results from "./Results";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../theme/Theme";
import { AgeCalculatorContext } from "./context/ageCalculatorContext";

const BoxContainer = () => {
  const theme = useTheme();

  const currentYear = new Date().getFullYear();

  const [dates, setDates] = useState({ DAY: "", MONTH: "", YEAR: "" });
  const [errors, setErrors] = useState({
    DAY: ["", false],
    MONTH: ["", false],
    YEAR: ["", false],
  });
  const [results, setResults] = useState({
    DAY: "--",
    MONTH: "--",
    YEAR: "--",
  });

  const getDaysInCurrentMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const isValid = (day, month, year) => {
    if (month === 0 || year === 0) {
      return true;
    } else if (month >= 12) {
      return true;
    } else {
      return (
        month > 0 &&
        month <= 12 &&
        day > 0 &&
        day <= getDaysInCurrentMonth(year, month)
      );
    }
  };

  const calculateAge = () => {
    const today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let calcDay, calcMonth, calcYear;

    calcYear = currentYear - +dates.YEAR;

    if (currentMonth >= +dates.MONTH) {
      calcMonth = currentMonth - +dates.MONTH;
    } else {
      currentYear -= 1;
      calcMonth = 12 + currentMonth - +dates.MONTH;
    }

    if (currentDay >= +dates.DAY) {
      calcDay = currentDay - +dates.DAY;
    } else {
      calcMonth -= 1;
      calcDay =
        getDaysInCurrentMonth(+dates.YEAR, +dates.MONTH) +
        currentDay -
        +dates.DAY;
    }

    if (calcMonth < 0) {
      calcMonth = 11;
      calcYear -= 1;
    }

    setResults((prevState) => ({
      ...prevState,
      DAY: calcDay,
      MONTH: calcMonth,
      YEAR: calcYear,
    }));
  };

  const validationsForm = (e) => {
    let activeValidDate = false;
    e.preventDefault();

    let newErrors = {};

    if (dates.DAY === "") {
      newErrors = { ...newErrors, DAY: ["This field is required", true] };
    } else if (+dates.DAY > 31 || +dates.DAY < 1 || isNaN(+dates.DAY)) {
      newErrors = { ...newErrors, DAY: ["Must be a valid day", true] };
    } else if (!isValid(+dates.DAY, +dates.MONTH, +dates.YEAR)) {
      newErrors = { ...newErrors, DAY: ["Must be a valid date", true] };
      activeValidDate = true;
    } else {
      newErrors = { ...newErrors, DAY: ["", false] };
    }

    if (dates.MONTH === "") {
      newErrors = { ...newErrors, MONTH: ["This field is required", true] };
    } else if (+dates.MONTH > 12 || +dates.MONTH < 1 || isNaN(+dates.MONTH)) {
      newErrors = { ...newErrors, MONTH: ["Must be a valid month", true] };
    } else {
      newErrors = { ...newErrors, MONTH: ["", false] };
    }

    if (dates.YEAR === "") {
      newErrors = { ...newErrors, YEAR: ["This field is required", true] };
    } else if (isNaN(+dates.YEAR)) {
      newErrors = { ...newErrors, YEAR: ["Must be a valid year", true] };
    } else if (currentYear <= +dates.YEAR) {
      newErrors = { ...newErrors, YEAR: ["Must be in the past", true] };
    } else {
      newErrors = { ...newErrors, YEAR: ["", false] };
    }

    if (activeValidDate) {
      newErrors = { ...newErrors, MONTH: ["", true] };
      newErrors = { ...newErrors, YEAR: ["", true] };
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error[0] === "")) {
      calculateAge();
    } else {
      setResults((prevState) => ({
        ...prevState,
        DAY: "--",
        MONTH: "--",
        YEAR: "--",
      }));
    }
  };

  return (
    <AgeCalculatorContext.Provider value={{ dates, setDates, errors, results }}>
      <ThemeProvider theme={Theme}>
        <Box
          sx={{
            backgroundColor: colors.White,
            width: "700px",
            borderRadius: "20px 20px 150px 20px",
            padding: "30px",
            [theme.breakpoints.down("sm")]: {
              width: "95%",
            },
          }}
        >
          <InputDates validationsForm={validationsForm} />
          <Results />
        </Box>
      </ThemeProvider>
    </AgeCalculatorContext.Provider>
  );
};

export default BoxContainer;
