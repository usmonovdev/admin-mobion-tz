import React, { useState } from "react";
import ModalFather from "./ModalFather";
import { Box } from "@mui/material";
import { LiaTimesSolid } from "react-icons/lia";
import { TextH3, TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { BiImageAdd } from "react-icons/bi";

const AddAds = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [color, setColor] = useState("");
  const [count, setCount] = useState("");

  const [brand, setBrand] = useState("");

  const handleAddProduct = () => {};

  return (
    <>
      {open ? (
        <ModalFather>
          <Box
            bgcolor={"custom.background"}
            className="p-4 rounded-2xl flex flex-col gap-3"
          >
            <div className="w-full flex justify-end">
              <LiaTimesSolid
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="flex flex-row gap-4 justify-start">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                id="photo"
              />
              <label htmlFor="photo" className="w-full">
                <div className="w-full flex flex-col gap-3">
                  <TextP>{t("add.ads.size")} (1290 X 320)</TextP>
                  <div className="w-full h-[60px] border border-dashed rounded-2xl cursor-pointer flex items-center justify-center">
                    <BiImageAdd className="text-2xl" />
                  </div>
                </div>
              </label>
            </div>
            <div className="w-full flex justify-end">
              <button className="text-right px-4 py-2 rounded-2xl bg-[#02C981]">
                {t("add.btn")}
              </button>
            </div>
          </Box>
        </ModalFather>
      ) : (
        ""
      )}
    </>
  );
};

export default AddAds;
