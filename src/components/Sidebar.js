import { Box } from "@mui/material";
import React from "react";

const Slidebar = () => {
  return (
    <Box
      flex={1}
      bgcolor="skyblue"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Slidebar;
