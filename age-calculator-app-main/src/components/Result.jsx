import React, { useContext } from "react";
import { Box } from "@mui/material";
import colors from "../utils/Colors";
import { AgeCalculatorContext } from "./context/ageCalculatorContext";
import { styled } from "@mui/material/styles";

const Result = ({ nameResult, name }) => {
  const { results } = useContext(AgeCalculatorContext);

  const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
  }));

  const StyledTypography = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: "4.5rem",
      letterSpacing: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
      letterSpacing: "2px",
    },
  }));

  return (
    <StyledBox
      sx={{
        fontWeight: 800,
        fontFamily: "Poppins",
        fontStyle: "italic",
        color: colors.OffBlack,
        display: "flex",
        alignItems: "center",
        fontSize: "5.5rem",
        lineHeight: 1.2,
      }}
    >
      <StyledTypography
        sx={{
          color: colors.Purple,
          fontWeight: 800,
          fontFamily: "Poppins",
          letterSpacing: "13px",
          fontSize: "5.5rem",
          lineHeight: 1,
        }}
      >
        {results[name]}
      </StyledTypography>
      {nameResult}
    </StyledBox>
  );
};

export default Result;
