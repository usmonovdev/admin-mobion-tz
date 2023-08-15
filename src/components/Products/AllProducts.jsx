import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextHeader, TextP } from "../../mui-customizations/Typography";
import { IoIosAdd } from "react-icons/io";
import axios from "../../utils/axios-config";
import { GET_PRODUCTS } from "../../utils/api-links";
import { Box } from "@mui/material";
import { AddProduct } from "../../ui-helpers";

const AllProducts = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(GET_PRODUCTS);
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <AddProduct open={open} setOpen={setOpen} />
      <div className="px-6 mt-3">
        <div className="flex flex-row mb-3 justify-between items-center">
          <TextHeader>{t("products.title")}</TextHeader>
          <button
            className="p-2 bg-[#02C981] rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <IoIosAdd className="text-2xl" />
          </button>
        </div>
        <div>
          {data.length <= 0 ? (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center">
              <TextP>{t("helpers.no_product")}</TextP>
            </div>
          ) : (
            <>
              {data.map((product, i) => {
                return (
                  <Box
                    key={product.id}
                    className="p-3 rounded-2xl flex flex-row justify-between"
                    bgcolor={"custom.whiteToBlack"}
                  >
                    <div className="flex flex-row gap-3 items-center">
                      <TextP>{i + 1}</TextP>
                      <TextP>{product.name}</TextP>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="p-2 bg-[#02C981] rounded-lg">
                        <TextP>{t("helpers.btn_edit")}</TextP>
                      </button>
                      <button className="p-2 bg-[#02C981] rounded-lg">
                        <TextP>{t("helpers.btn_remove")}</TextP>
                      </button>
                    </div>
                  </Box>
                );
              })}{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
