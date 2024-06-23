import HeaderIpTracker from "./components/HeaderIpTracker";
import MapIpTracker from "./components/MapIpTracker";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./layouts/themes";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [errorMapContainer, setErrorMapContainer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box component="main">
        <CssBaseline />
        <HeaderIpTracker setErrorMapContainer={setErrorMapContainer} />
        <MapIpTracker errorMapContainer={errorMapContainer} />
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
