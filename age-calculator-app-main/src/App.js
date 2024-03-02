import React from "react";
import BoxContainer from "./components/BoxContainer";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <BoxContainer />
    </Container>
  );
};

export default App;
