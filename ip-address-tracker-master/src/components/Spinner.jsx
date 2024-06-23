import { Box } from "@mui/material";
import "./Spinner.css";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "65vh",
      }}
    >
      <Box className="loader"></Box>
    </Box>
  );
};

export default Spinner;
