import { Typography, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ShowResultSearch = ({ errorSubmit }) => {
  const { item: infoIp, status } = useSelector((state) => state.ip);

  const isPending = status === "pending";
  const isRejected = status === "rejected";

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const showResultBoxStyle = {
    width: "75rem",
    position: "absolute",
    bottom: 0,
    transform: "translateY(50%)",
    zIndex: "1000",
    borderRadius: "10px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("xl")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      transform: "translateY(65%)",
    },
  };

  const resultTypeStyle = {
    fontWeight: 700,
    mt: 1,
    fontSize: "1.5rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem",
    },
  };

  return (
    <Box sx={showResultBoxStyle}>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={
            !isMobile
              ? { borderRight: 1, borderColor: "secondary.main" }
              : { textAlign: "center" }
          }
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            IP ADDRESS
          </Typography>
          <Typography variant="h1" sx={resultTypeStyle}>
            {isRejected || errorSubmit
              ? "-"
              : isPending
              ? "-"
              : infoIp.ip
              ? infoIp.ip
              : "-"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={
            !isTablet
              ? {
                  borderRight: 1,
                  borderColor: "secondary.main",
                  padding: "0 25px",
                }
              : isMobile
              ? { textAlign: "center" }
              : { padding: "0 25px" }
          }
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            LOCATION
          </Typography>
          <Typography variant="h1" sx={resultTypeStyle}>
            {isRejected || errorSubmit
              ? "-"
              : isPending
              ? "-"
              : infoIp.location
              ? `${infoIp.location.country} ${infoIp.location.region} ${infoIp.location.city}`
              : "-"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={
            !isTablet
              ? {
                  borderRight: 1,
                  borderColor: "secondary.main",
                  padding: "0 25px",
                }
              : isMobile
              ? { textAlign: "center" }
              : { borderRight: 1, borderColor: "secondary.main", padding: "0" }
          }
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            TIME ZONE
          </Typography>
          <Typography variant="h1" sx={resultTypeStyle}>
            {isRejected || errorSubmit
              ? "-"
              : isPending
              ? "-"
              : infoIp.location && infoIp.location.timezone
              ? infoIp.location.timezone
              : "-"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={
            !isMobile
              ? {
                  padding: "0 25px",
                }
              : { textAlign: "center" }
          }
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            ISP
          </Typography>
          <Typography variant="h1" sx={resultTypeStyle}>
            {isRejected || errorSubmit
              ? "-"
              : isPending
              ? "-"
              : infoIp.isp
              ? infoIp.isp
              : "-"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

ShowResultSearch.propTypes = {
  errorSubmit: PropTypes.bool.isRequired,
};

export default ShowResultSearch;
