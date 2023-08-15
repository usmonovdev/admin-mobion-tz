import { Box } from "@mui/material";
import React from "react";

const ModalFather = ({ children }) => {
  return (
    <Box
      className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center"
      bgcolor={"custom.blueOpacity"}
    >
      <div className="w-[700px] mx-auto h-fit">{children}</div>
    </Box>
  );
};

export default ModalFather;
