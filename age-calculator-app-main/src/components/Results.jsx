import React from "react";
import { Box } from "@mui/material";
import { Data } from "../data/Data";
import Result from "./Result";

const Results = () => {
  return (
    <Box sx={{ padding: "0 30px" }}>
      {Data.map((d) => (
        <Result key={d.id} nameResult={d.name_result} name={d.name} />
      ))}
    </Box>
  );
};

export default Results;
