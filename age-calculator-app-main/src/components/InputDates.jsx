import React from "react";
import {
  Container,
  Box,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import Colors from "../utils/Colors";
import iconArrow from "../assets/images/icon-arrow.svg";
import { Data } from "../data/Data";
import SingleDate from "./SingleDate";

const InputDates = ({ validationsForm }) => {
  const theme = useTheme();

  const flexBoxStyles = {
    marginBlock: "40px",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  };

  const dividerStyles = {
    [theme.breakpoints.down("md")]: {
      marginBlock: "55px",
    },
  };

  return (
    <Container
      component="form"
      sx={{ margin: 0, padding: 0 }}
      onSubmit={validationsForm}
      style={{ maxWidth: "100%" }}
    >
      <Box sx={flexBoxStyles}>
        {Data.slice()
          .reverse()
          .map((d) => (
            <SingleDate name={d.name} placeholder={d.placeholder} key={d.id} />
          ))}
      </Box>
      <Box sx={{ position: "relative" }}>
        <Divider sx={dividerStyles} />
        <Button
          type="submit"
          A
          sx={{
            backgroundColor: Colors.Purple,
            padding: "15px",
            borderRadius: "50%",
            position: "absolute",
            right: "0",
            top: "-30px",
            zIndex: "1",
            "&:hover": {
              backgroundColor: Colors.OffBlack,
            },
            [theme.breakpoints.down("md")]: {
              right: "50%",
              transform: "translateX(50%)",
            },
          }}
        >
          <img
            src={iconArrow}
            alt="icon-arrow"
            style={{ width: "35px", height: "35px" }}
          />
        </Button>
      </Box>
    </Container>
  );
};

export default InputDates;
