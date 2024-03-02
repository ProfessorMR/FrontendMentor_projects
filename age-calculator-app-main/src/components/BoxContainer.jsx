import React from "react";
import { Box } from "@mui/material";
import colors from "../utils/Colors";
import InputDates from "./InputDates";
// import Result from "./components/Result";

const BoxContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.White,
        width: "700px",
        borderRadius: "10px 10px 50px 10px",
        padding: "30px",
      }}
    >
      <InputDates />
    </Box>
  );
};

export default BoxContainer;
