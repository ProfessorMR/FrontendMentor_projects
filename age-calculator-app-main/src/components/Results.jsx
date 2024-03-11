import React from "react";
import { Box } from "@mui/material";
import { Data } from "../data/Data";
import Result from "./Result";
import { styled } from "@mui/material/styles";

const Results = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  }));

  return (
    <StyledBox sx={{ padding: "0 30px" }}>
      {Data.map((d) => (
        <Result key={d.id} nameResult={d.name_result} name={d.name} />
      ))}
    </StyledBox>
  );
};

export default Results;
