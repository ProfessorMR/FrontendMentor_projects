import React from "react";
import {
  Container,
  Box,
  Divider,
  Avatar,
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
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  };

  const dividerStyles = {
    textAlign: "right",
    ".MuiDivider-wrapper": {
      padding: 0,
    },
    "&.MuiDivider-root::after": {
      width: 0,
    },
    [theme.breakpoints.down("md")]: {
      marginBlock: "30px",
      "&.MuiDivider-root::after": {
        width: "100%",
      },
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
        {Data.map((d) => (
          <SingleDate name={d.name} placeholder={d.placeholder} key={d.id} />
        ))}
      </Box>
      <Box>
        <Divider sx={dividerStyles}>
          <Button
            type="submit"
            sx={{
              backgroundColor: Colors.Purple,
              padding: "15px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: Colors.OffBlack,
              },
            }}
          >
            <Avatar
              src={iconArrow}
              alt="icon-arrow"
              sx={{ width: "35px", height: "35px" }}
            />
          </Button>
        </Divider>
      </Box>
    </Container>
  );
};

export default InputDates;
