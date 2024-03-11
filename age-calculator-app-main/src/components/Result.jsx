import React, { useContext } from "react";
import { Typography,Box } from "@mui/material";
import colors from "../utils/Colors";
import { AgeCalculatorContext } from "./context/ageCalculatorContext";

const Result = ({ nameResult, name }) => {
  const { results } = useContext(AgeCalculatorContext);

  return (
    <Box
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
      <Typography
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
      </Typography>
      {nameResult}
    </Box>
  );
};

export default Result;
