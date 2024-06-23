import { Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ShowResultSearch = ({ errorSubmit }) => {
  const { item: infoIp, status } = useSelector((state) => state.ip);

  const isPending = status === "pending";
  const isRejected = status === "rejected";

  return (
    <Box
      sx={{
        width: "75rem",
        position: "absolute",
        bottom: 0,
        transform: "translateY(50%)",
        zIndex: "1000",
      }}
    >
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
          xs={3}
          sx={{ borderRight: 1, borderColor: "secondary.main" }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            IP ADDRESS
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
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
          xs={3}
          sx={{
            borderRight: 1,
            borderColor: "secondary.main",
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            LOCATION
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
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
          xs={3}
          sx={{
            borderRight: 1,
            borderColor: "secondary.main",
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            TIME ZONE
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
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
          xs={3}
          sx={{
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            ISP
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
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
