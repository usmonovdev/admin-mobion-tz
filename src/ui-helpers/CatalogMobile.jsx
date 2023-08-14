import React, { useState } from "react";
import { TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { navbarCatalog } from "../data/navbar";
import { Box } from "@mui/material";

const CatalogMobile = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <li
      className="flex flex-col cursor-pointer border border-t-0 border-r-0 border-l-0 pb-3"
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row items-center gap-1 w-full justify-between">
        <TextP className="hover:text-[#02C981] transition">{t("header.catalog.title")}</TextP>
        <IoIosArrowDown />
      </div>
      {open ? (
        <div className="flex flex-col gap-5 rounded-lg">
          <ul>
            {navbarCatalog.map((catalog) => {
              return (
                <li className=" pt-3 pb-2">
                  <TextP className="hover:text-[#02C981] transition">{t(catalog.label)}</TextP>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default CatalogMobile;
