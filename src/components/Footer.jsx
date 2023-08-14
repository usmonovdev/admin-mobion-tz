import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { TextH3, TextInfo, TextP } from "../mui-customizations/Typography";
import phone from "../image/icons/phone.svg";
import site from "../image/icons/language.svg";
import telegram from "../image/icons/telegram.svg";
import instagram from "../image/icons/instagram.svg";
import youtube from "../image/icons/youtube.svg";
import facebook from "../image/icons/facebook.svg";
import prime from "../image/prime.png";
import mobion from "../image/logo-white.png";
import styled from "@emotion/styled";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

const StyledTextH3 = styled(TextH3)(({ theme }) => ({
  color: "#fff",
}));

const StyledTextP = styled(TextP)(({ theme }) => ({
  color: "#fff",
}));

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor={"blue.main"}>
      <div className="container-custom py-5 flex flex-col gap-3">
        <div className="flex laptop:flex-row flex-col justify-between">
          <ul className="flex flex-col laptop:gap-1 gap-4 laptop:items-start items-center">
            <li>
              <StyledTextH3>{t("footer.section1.title")}</StyledTextH3>
            </li>
            <li>
              <StyledTextP>{t("footer.section1.catalog")}</StyledTextP>
            </li>
            <li>
              <Link to={"/about"}>
                <StyledTextP>{t("footer.section1.title")}</StyledTextP>
              </Link>
            </li>
            <li>
              <StyledTextP>{t("footer.section1.about")}</StyledTextP>
            </li>
          </ul>
          <div className="laptop:hidden block h-[0.1rem] w-full bg-[#D1E1F980] my-2"></div>
          <ul className="flex flex-col laptop:gap-1 gap-4 laptop:items-start items-center">
            <li>
              <StyledTextH3>{t("footer.section2.title")}</StyledTextH3>
            </li>
            <li>
              <Scroll to="contact" spy={true} offset={-10} smooth={true}>
                <StyledTextP>{t("footer.section2.contact")}</StyledTextP>
              </Scroll>
            </li>
            <li>
              <Scroll to="faq" spy={true} offset={-10} smooth={true}>
                <StyledTextP>{t("footer.section2.faq")}</StyledTextP>
              </Scroll>
            </li>
          </ul>
          <div className="laptop:hidden block h-[0.1rem] w-full bg-[#D1E1F980] my-2"></div>
          <ul className="flex flex-col laptop:gap-1 gap-4 laptop:items-start items-center">
            <li>
              <StyledTextH3>{t("footer.contact")}</StyledTextH3>
            </li>
            <li className="flex flex-row gap-2">
              <img src={phone} alt={"phone"} />
              <a className="text-white" href="tel:+998943320016">
                +998 94 332 00 16
              </a>
            </li>
            <li className="flex flex-row gap-2">
              <img src={site} alt="site" />
              <a className="text-white" href="/">
                mobion.uz
              </a>
            </li>
            <li>
              <ul className="flex flex-row gap-4">
                <li>
                  <a href="https://t.me/mobionuz7">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/mobion_uz?igshid=Y2I2MzMwZWM3ZA==">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="laptop:hidden block h-[0.1rem] w-full bg-[#D1E1F980] my-2"></div>
        <div className="flex w-full laptop:flex-row flex-col laptop:gap-0 gap-4 justify-between items-center pt-3">
          <Link to={"/"}>
            <img src={mobion} alt="mobion logo" className="w-[120px]" />
          </Link>
          <p className="text-[#D1E1F980] text-center">{t("footer.info")}</p>
          <div className="flex laptop:flex-row flex-col gap-2 items-center">
            <img src={prime} alt="prime tech logo" className="w-[120px]" />
            <p className="text-[#D1E1F980] flex flex-row">
              {t("footer.creator")}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
