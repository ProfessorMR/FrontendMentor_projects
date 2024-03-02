import React from "react";
import { Box } from "@mui/material";
import colors from "../utils/Colors";
import InputDates from "./InputDates";
import Results from "./Results";

const BoxContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.White,
        width: "700px",
        borderRadius: "20px 20px 150px 20px",
        padding: "30px",
      }}
    >
      <InputDates />
      <Results />
    </Box>
  );
};

export default BoxContainer;
