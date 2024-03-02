import React from "react";
import { Typography } from "@mui/material";
import colors from "../utils/Colors";

const Result = ({ nameResult }) => {
  return (
    <Typography
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
        --
      </Typography>
      {nameResult}
    </Typography>
  );
};

export default Result;
