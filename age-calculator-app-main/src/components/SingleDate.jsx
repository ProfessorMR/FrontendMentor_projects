import React from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Colors from "../utils/Colors";

const SingleDate = ({ name, placeholder }) => {
  return (
    <Box
      sx={{
        width: "30%",
      }}
    >
      <InputLabel
        htmlFor={name}
        sx={{
          color: Colors.SmokeyGrey,
          fontWeight: 700,
          letterSpacing: "2px",
          fontSize: "0.8rem",
        }}
      >
        {name}
      </InputLabel>
      <TextField
        id={name}
        placeholder={placeholder}
        variant="outlined"
        sx={{
          marginTop: "4px",
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
          display: "none",
        }}
      >
        Error
      </Typography>
    </Box>
  );
};

export default SingleDate;
