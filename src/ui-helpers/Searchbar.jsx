import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
import axios from "./../utils/axios-config";
import { GET_PRODUCTS } from "../utils/api-links";
import { TextP } from "../mui-customizations/Typography";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(GET_PRODUCTS, {
        params: {
          limit: 20,
        },
      });
      setData(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    if (document.activeElement === ref.current) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  const handleOpen = (e) => {
    navigate(`/product/${e}`);
    setOpen(false);
  };

  function getFilteredList() {
    return data.filter((e) => e.name.toLowerCase().includes(value));
  }

  var filteredData = useMemo(getFilteredList, [value, data]);

  return (
    <>
      <Box
        display={"flex"}
        onClick={() => setOpen(!open)}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"10px"}
        width={"320px"}
        height={"50px"}
        bgcolor={"custom.greyToWhite"}
        borderRadius={"50px"}
        padding={"8px 20px"}
        sx={{
          "@media screen and (max-width: 992px)": {
            width: "100%",
          },
        }}
        className="relative"
      >
        <input
          placeholder={t("header.search")}
          className="outline-none w-full text-[#012350] bg-transparent"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FiSearch className="text-2xl text-[#012350]" />
        {open ? (
          <>
            {filteredData.length <= 0 ? (
              <>
                <Box
                  onClick={() => handleOpen(data.id)}
                  bgcolor={"custom.greyToWhite"}
                  className="absolute cursor-pointer max-h-[400px] top-[60px] left-0 rounded-2xl w-full p-3"
                >
                  <TextP sx={{ color: "#012350 !important" }}>{t("helpers.no_product")}</TextP>
                </Box>
              </>
            ) : (
              <>
                {filteredData.map((data) => {
                  return (
                    <Box
                      onClick={() => handleOpen(data.id)}
                      bgcolor={"custom.greyToWhite"}
                      className="absolute cursor-pointer max-h-[400px] top-[60px] left-0 rounded-2xl w-full p-3"
                    >
                      <TextP sx={{ color: "#012350 !important" }}>{data.name}</TextP>
                    </Box>
                  );
                })}
              </>
            )}
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Searchbar;
