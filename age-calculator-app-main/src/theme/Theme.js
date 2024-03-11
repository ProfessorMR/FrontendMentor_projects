import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  breakpoints: {
    values: {
      md: 768,
      sm: 576,
    },
  },
});
