import { Box } from "@mui/material";
import React, { useState } from "react";
import mobion from ".././image/logo-white.png";
import prime from ".././image/logo-prime.png";
import photo from ".././image/login.png";
import { TextHeader, TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password == "pasadmin.12") {
      navigate("/")
      localStorage.setItem("IsAdmin", true)
    }
  };

  return (
    <Box
      className="w-full h-screen absolute top-0 left-0 flex tablet:flex-row flex-col"
      bgcolor={"#fff"}
    >
      <div className="w-6/12 h-full bg-[#012350] tablet:flex hidden flex-col items-center justify-between py-8">
        <img src={mobion} className="w-[20%]" />
        <img src={photo} className="w-[50%]" />
        <img src={prime} className="w-[50px]" />
      </div>
      <div className="tablet:w-6/12 w-screen h-full px-10 flex items-center justify-center items-center">
        <div className="w-[80%] flex flex-col gap-6">
          <TextHeader className="!text-black text-center">
            {t("login.title")}
          </TextHeader>
          <div className="flex flex-col gap-1">
            <TextP className="!text-black">{t("login.email")}</TextP>
            <input
              type="text"
              className="input-login"
              placeholder={t("login.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <TextP className="!text-black">{t("login.password")}</TextP>
            <input
              type="password"
              className="input-login"
              placeholder={t("login.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-[#02C981] py-2 rounded-lg"
            onClick={handleLogin}
          >
            <TextP className="!text-black">{t("login.button")}</TextP>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Login;
