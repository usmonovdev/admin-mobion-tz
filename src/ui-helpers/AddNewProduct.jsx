import React, { useState } from "react";
import ModalFather from "./ModalFather";
import { Box } from "@mui/material";
import { LiaTimesSolid } from "react-icons/lia";
import { TextH3, TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";

const AddNewProduct = ({ open, setOpen }) => {
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
          <Box bgcolor={"custom.background"} className="p-4 rounded-2xl flex flex-col gap-3">
            <div className="w-full flex justify-end">
              <LiaTimesSolid
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="flex flex-row gap-4 justify-start">
              <div className="w-[50%] flex flex-col gap-3">
                <TextH3>{t("add.all.title")}</TextH3>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.all.name")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("add.all.name")}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.all.desc")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder={t("add.all.desc")}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.all.photo")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder={t("add.all.photo")}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.all.color")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder={t("add.all.color")}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.all.count")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    placeholder={t("add.all.count")}
                  />
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-3">
                <TextH3>{t("add.info.title")}</TextH3>
                <div className="flex flex-col gap-1">
                  <TextP>{t("add.info.brand")}</TextP>
                  <input
                    type="text"
                    className="input-add"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder={t("add.info.brand")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="text-right px-4 py-2 rounded-2xl bg-[#02C981]">{t("add.btn")}</button>
            </div>
          </Box>
        </ModalFather>
      ) : (
        ""
      )}
    </>
  );
};

export default AddNewProduct;
