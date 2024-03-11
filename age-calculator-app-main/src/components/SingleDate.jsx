import React, { useContext } from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Colors from "../utils/Colors";
import { AgeCalculatorContext } from "./context/ageCalculatorContext";

const SingleDate = ({ name, placeholder }) => {
  const { dates, setDates, errors } = useContext(AgeCalculatorContext);
  console.log();

  return (
    <Box
      sx={{
        width: "30%",
      }}
    >
      <InputLabel
        htmlFor={name}
        sx={{
          color: errors[name][1] ? Colors.LightRed : Colors.SmokeyGrey,
          fontWeight: 700,
          letterSpacing: "2px",
          fontSize: "0.8rem",
        }}
      >
        {name}
      </InputLabel>
      <TextField
        onChange={(e) => setDates({ ...dates, [name]: e.target.value })}
        id={name}
        placeholder={placeholder}
        variant="outlined"
        sx={{
          marginTop: "4px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: errors[name][1] ? Colors.LightRed : Colors.LightGrey,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: Colors.Purple,
            },
          "& input": {
            fontSize: "1.5rem",
            fontWeight: 800,
            color: Colors.OffBlack,
            padding: "12px",
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          fontFamily: "Poppins",
          marginTop: "5px",
          fontStyle: "italic",
          color: Colors.LightRed,
          fontWeight: 400,
          display: errors[name][1] ? "block" : "none",
        }}
      >
        {errors[name][0]}
      </Typography>
    </Box>
  );
};

export default SingleDate;
