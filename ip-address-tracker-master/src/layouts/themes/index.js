import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }`,
    },
  },
  typography: {
    fontFamily: ["Rubik", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "hsl(0, 0%, 17%)",
    },
    secondary: {
      main: "hsl(0, 0%, 59%)",
    },
  },
});
