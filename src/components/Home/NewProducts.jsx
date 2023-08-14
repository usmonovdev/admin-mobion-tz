import React, { useEffect, useState } from "react";
import {
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { Box, CircularProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios-config";
import { GET_NEW_PRODUCT } from "../../utils/api-links";
import { TbMoodEmpty } from "react-icons/tb";

const NewProducts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(GET_NEW_PRODUCT);
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex phone:flex-row flex-col justify-between">
          {isLoading ? (
            <Box
              bgcolor={"custom.contact"}
              className="w-[270px] h-[50px] rounded-lg"
            ></Box>
          ) : (
            <TextHeader>{t("newProducts.title")}</TextHeader>
          )}
        </div>
        {isLoading ? (
          <>
            <Box className="cards">
              {[1, 2, 3, 4].map((data) => {
                return (
                  <Box
                    key={data}
                    bgcolor={"custom.contact"}
                    className="h-[390px] rounded-2xl flex items-center justify-center"
                  >
                    <CircularProgress />
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          <>
            {data.length <= 0 ? (
              <>
                <Box className="cards">
                  {[1, 2, 3, 4].map((data) => {
                    return (
                      <Box
                        key={data}
                        bgcolor={"custom.contact"}
                        className="h-[390px] rounded-2xl flex flex-col gap-2 items-center justify-center"
                      >
                        <TbMoodEmpty className="text-6xl opacity-10" />
                        <TextP className="opacity-10">
                          {t("helpers.no_product")}
                        </TextP>
                      </Box>
                    );
                  })}
                </Box>
              </>
            ) : (
              <>
                <div className="cards">
                  {data.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="flex flex-col gap-2 max-h-390px"
                        onClick={() => handleOpen(product.id)}
                      >
                        <div className="phone:h-[180px] h-[230px] w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-2xl cursor-pointer h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <TextP>{product.name}</TextP>
                          <TextInfo>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat pariatur dolor nesciunt. Numquam
                            perspiciatis
                          </TextInfo>
                          <div className="flex flex-row gap-2 w-full items-center">
                            <Rating
                              value={product.star}
                              readOnly
                              className=""
                              size="small"
                            />
                            <TextInfo>(0 {t("newProducts.comment")})</TextInfo>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NewProducts;
