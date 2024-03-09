import React, { useState, useRef } from "react";
import { Container, Box, Divider, Avatar, Button } from "@mui/material";
import Colors from "../utils/Colors";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../theme/Theme";
import iconArrow from "../assets/images/icon-arrow.svg";
import { Data } from "../data/Data";
import SingleDate from "./SingleDate";
import { AgeCalculatorContext } from "./context/ageCalculatorContext";

const InputDates = () => {
  const currentYear = new Date().getFullYear();

  const formContainer = useRef(null);

  const [dates, setDates] = useState({ DAY: "", MONTH: "", YEAR: "" });
  const [errors, setErrors] = useState({ DAY: "", MONTH: "", YEAR: "" });

  const validationsForm = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (dates.DAY === "") {
      newErrors = { ...newErrors, DAY: "This field is required" };
    } else if (+dates.DAY > 31 || +dates.DAY < 1 || isNaN(+dates.DAY)) {
      newErrors = { ...newErrors, DAY: "Must be a valid day" };
    } else {
      newErrors = { ...newErrors, DAY: "" };
    }

    if (dates.MONTH === "") {
      newErrors = { ...newErrors, MONTH: "This field is required" };
    } else if (+dates.MONTH > 12 || +dates.MONTH < 1 || isNaN(+dates.MONTH)) {
      newErrors = { ...newErrors, MONTH: "Must be a valid month" };
    } else {
      newErrors = { ...newErrors, MONTH: "" };
    }

    if (dates.YEAR === "") {
      newErrors = { ...newErrors, YEAR: "This field is required" };
    } else if (isNaN(+dates.YEAR)) {
      newErrors = { ...newErrors, YEAR: "Must be a valid year" };
    } else if (currentYear <= +dates.YEAR) {
      newErrors = { ...newErrors, YEAR: "Must be in the past" };
    } else {
      newErrors = { ...newErrors, YEAR: "" };
    }

    setErrors(newErrors);
  };

  return (
    <ThemeProvider theme={Theme}>
      <AgeCalculatorContext.Provider value={{ dates, setDates, errors }}>
        <Container
          component="form"
          sx={{
            margin: 0,
            padding: 0,
          }}
          onSubmit={validationsForm}
          ref={formContainer}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            {Data.map((d) => (
              <SingleDate
                name={d.name}
                placeholder={d.placeholder}
                key={d.id}
              />
            ))}
          </Box>
          <Box>
            <Divider
              textAlign="right"
              sx={{
                ".MuiDivider-wrapper": {
                  padding: 0,
                },
                "&.MuiDivider-root::after": {
                  width: 0,
                },
              }}
            >
              <Button
                type="submit"
                sx={{
                  backgroundColor: Colors.Purple,
                  padding: "15px",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: Colors.OffBlack,
                  },
                }}
              >
                <Avatar src={iconArrow} alt="icon-arrow"></Avatar>
              </Button>
            </Divider>
          </Box>
        </Container>
      </AgeCalculatorContext.Provider>
    </ThemeProvider>
  );
};

export default InputDates;
