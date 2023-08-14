import { Box } from "@mui/material";
import React, { useState } from "react";
import { languages } from "../data/languages";
import { TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <Box position={"relative"}>
      <ul className="flex flex-col gap-4">
        {languages.map((lng) => {
          return (
            <>
              {i18n.language == lng.value ? (
                <li
                  key={lng.id}
                  className="flex flex-row items-center gap-4 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <img src={lng.logo} alt={lng.lng} className="w-[40px]" />
                  <TextP>{lng.lng}</TextP>
                </li>
              ) : (
                ""
              )}
            </>
          );
        })}
      </ul>
      {open ? (
        <ul
          className="flex flex-col gap-4 absolute mt-4"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          {languages.map((lng) => {
            return (
              <>
                {i18n.language !== lng.value ? (
                  <li
                    className="flex flex-row items-center gap-4 cursor-pointer"
                    onClick={() => {
                      i18n.changeLanguage(lng.value);
                      setOpen(!open);
                    }}
                  >
                    <img src={lng.logo} alt={lng.lng} className="w-[40px]" />
                    <TextP>{lng.lng}</TextP>
                  </li>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Language;
