import { Box } from "@mui/material";
import patternBgDesktop from "../assets/images/pattern-bg-desktop.png";

const HeaderIpTracker = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${patternBgDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100%",
      }}
      component="header"
    ></Box>
  );
};

export default HeaderIpTracker;
