import HeaderIpTracker from "./components/HeaderIpTracker";
import MapIpTracker from "./components/MapIpTracker";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./layouts/themes";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main">
        <CssBaseline />
        <HeaderIpTracker />
        <MapIpTracker />
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
