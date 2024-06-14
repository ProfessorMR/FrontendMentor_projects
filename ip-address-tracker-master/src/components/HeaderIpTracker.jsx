import { Box, Typography, Paper, InputBase, IconButton } from "@mui/material";
import patternBgDesktop from "../assets/images/pattern-bg-desktop.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShowResultSearch from "./ShowResultSearch";

const HeaderIpTracker = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${patternBgDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "250px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      component="header"
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontWeight: "700" }}>
          IP Address Tracker
        </Typography>
        <Paper component="form" sx={{ mt: "1.5rem", borderRadius: "15px" }}>
          <InputBase
            sx={{ ml: 1, width: "30rem", p: "10px" }}
            placeholder="Search for any ip address and domain"
          />
          <IconButton
            type="button"
            sx={{
              p: "15px",
              backgroundColor: "text.primary",
              borderRadius: " 0 15px 15px 0",
              "&:hover": {
                backgroundColor: "hsl(0, 0%, 25%)",
              },
            }}
            aria-label="search"
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </IconButton>
        </Paper>
      </Box>
      <ShowResultSearch />
    </Box>
  );
};

export default HeaderIpTracker;
