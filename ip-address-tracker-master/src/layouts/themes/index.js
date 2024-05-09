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
});

