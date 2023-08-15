import React from "react";
import { Box } from "@mui/material";
import logo from "../../image/logo.png";
import logoW from "../../image/logo-white.png";
import { useTheme } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLink } from "../../data/sidebar";
import { TextH3, TextP } from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import user from "../../image/user.png";

const Sidebar = () => {
  const { palette } = useTheme();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <>
        <Box
          className={`w-[20%] min-w-[300px] h-screen min-h-[650px]`}
          bgcolor={"custom.whiteToBlack"}
        >
          <div className="w-full h-full px-4 pt-10 flex flex-col justify-between">
            <div>
              <div className="w-full flex justify-center mb-[10px]">
                <img
                  src={`${palette.mode == "light" ? logo : logoW}`}
                  className="w-[50%] h-fit cursor-pointer"
                />
              </div>
              {sidebarLink.map((sidebar) => {
                return (
                  <Link key={sidebar.id} to={sidebar.link}>
                    <Box
                      className={`flex flex-row items-center p-3 gap-2 rounded-2xl ${
                        pathname == sidebar.link ? "bg-[#02C981]" : ""
                      }`}
                    >
                      <sidebar.icon className="text-xl" />
                      <TextP>{t(sidebar.label)}</TextP>
                    </Box>
                  </Link>
                );
              })}
            </div>
            <div className="flex justify-center flex-col items-center relative mb-[20px]">
              <img
                src={user}
                alt="user"
                className="w-[30%] absolute top-[-50px]"
              />
              <Box
                bgcolor={"custom.userBg"}
                className="w-full p-5 rounded-2xl flex flex-col gap-2"
              >
                <TextH3 className="text-center">Elbek Suyunov</TextH3>
                <TextP className="text-center">Waiter 4h 46m</TextP>
                <button className="w-full py-3 bg-[#02C981] rounded-2xl">
                  {t("header.button")}
                </button>
              </Box>
            </div>
          </div>
        </Box>
    </>
  );
};

export default Sidebar;
