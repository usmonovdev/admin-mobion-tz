import React from "react";
import { Language, Searchbar, ThemeToggle } from "../../ui-helpers";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full h-[70px] py-2 px-6 justify-between">
      <div className="flex flex-row items-center justify-center gap-3">
        <Searchbar />
      </div>
      <div className="flex flex-row items-center gap-3">
        <Language />
        <Box
          width={"0.1rem"}
          height={"30px"}
          bgcolor={"custom.greyToWhite"}
          className="tablet:block hidden"
        ></Box>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
