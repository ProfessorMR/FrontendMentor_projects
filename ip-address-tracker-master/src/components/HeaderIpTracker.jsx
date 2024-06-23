import { Box, Typography, Paper, InputBase, IconButton } from "@mui/material";
import patternBgDesktop from "../assets/images/pattern-bg-desktop.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShowResultSearch from "./ShowResultSearch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeodata } from "../reducers/ipSlice";
import { showToastError } from "../helper";
import PropTypes from "prop-types";

const HeaderIpTracker = ({ setErrorMapContainer }) => {
  const [search, setSearch] = useState("");
  const [errorSubmit, setErrorSubmit] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.ip);

  const ip4RegEx =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const ip6RegEx =
    /^((([0-9A-Fa-f]{1,4}:){1,6}:)|(([0-9A-Fa-f]{1,4}:){7}))([0-9A-Fa-f]{1,4})$/;
  const domainRegEx =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    dispatch(fetchGeodata({ initKeySearch: "", initValueSearch: "" }));
  }, [dispatch]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (ip4RegEx.test(search) || ip6RegEx.test(search)) {
      dispatch(
        fetchGeodata({ initKeySearch: "ipAddress", initValueSearch: search })
      );
      setErrorSubmit(false);
    } else if (domainRegEx.test(search)) {
      dispatch(
        fetchGeodata({ initKeySearch: "domain", initValueSearch: search })
      );
      setErrorSubmit(false);
    } else {
      showToastError();
      setErrorSubmit(true);
      setErrorMapContainer(true);
    }
  };

  useEffect(() => {
    if (status === "rejected") {
      showToastError(error);
    }
  }, [status, error]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${patternBgDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "260px",
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
        <Paper
          component="form"
          sx={{ mt: "1.5rem", borderRadius: "15px" }}
          onSubmit={handleSubmitForm}
        >
          <InputBase
            sx={{ ml: 1, width: "30rem", p: "10px" }}
            placeholder="Search for any ip address and domain"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            type="submit"
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
      <ShowResultSearch errorSubmit={errorSubmit} />
    </Box>
  );
};

HeaderIpTracker.propTypes = {
  setErrorMapContainer: PropTypes.func.isRequired,
};

export default HeaderIpTracker;
