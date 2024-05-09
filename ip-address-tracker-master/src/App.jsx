import HeaderIpTracker from "./components/HeaderIpTracker";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./layouts/themes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderIpTracker />
    </ThemeProvider>
  );
};

export default App;
