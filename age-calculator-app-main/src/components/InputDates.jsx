import React from "react";
import {
  Container,
  Box,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Colors from "../utils/Colors";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../theme/Theme";

const InputDates = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: "30%",
          }}
        >
          <InputLabel
            htmlFor="Day"
            sx={{
              color: Colors.SmokeyGrey,
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "0.8rem",
            }}
          >
            DAY
          </InputLabel>
          <TextField
            id="Day"
            placeholder="DD"
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
              display: "block",
              visibility: "hidden",
            }}
          >
            Error
          </Typography>
        </Box>
        <Box sx={{ width: "30%" }}>
          <InputLabel
            htmlFor="Month"
            sx={{
              color: Colors.SmokeyGrey,
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "0.8rem",
            }}
          >
            MONTH
          </InputLabel>
          <TextField
            id="Month"
            placeholder="MM"
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
              display: "block",
              visibility: "hidden",
            }}
          >
            Error
          </Typography>
        </Box>
        <Box sx={{ width: "30%" }}>
          <InputLabel
            htmlFor="Year"
            sx={{
              color: Colors.SmokeyGrey,
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "0.8rem",
            }}
          >
            YEAR
          </InputLabel>
          <TextField
            id="Year"
            placeholder="YYYY"
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
              display: "block",
              visibility: "hidden",
            }}
          >
            Error
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default InputDates;
