import { HiChevronUp } from "react-icons/hi";
import { faqs } from "../../data/faqs";
import { useTranslation } from "react-i18next";
import { TextH1, TextH2, TextH3, TextHeader, TextP } from "../../mui-customizations/Typography";
import { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledTextHeader = styled(TextHeader)(({ theme }) => ({
  fontSize: "32px",
  color: theme.palette.custom.text,
  fontWeight: "600",
  "@media screen and (max-width: 360px)": {
    fontSize: "24px",
  },
}));
export const StyledHeader = styled(TextHeader)(({ theme }) => ({
  fontSize: "32px",
  color: theme.palette.custom.text,
  fontWeight: "400",
  "@media screen and (max-width: 662px)": {
    fontSize: "24px",
  },
}));

const Faq = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(1);
  return (
    <div className="w-full" id="faq">
      <TextHeader marginBottom={"30px"}>{t("faq.title")}</TextHeader>
      <div className="w-full mx-auto overflow-hidden flex flex-col gap-3">
        {faqs.map((faq) => {
          return (
            <div
              className="w-full cursor-pointer"
              onClick={() => setOpen(faq.id)}
              key={faq.id}
            >
              <div className={`p-4 w-full flex rounded-t-2xl flex-row items-center border justify-between ${open == faq.id ? "border-[#02C981]" : "border-[#9E9E9E]"}`}>
                <TextH3>
                  {t(faq.title)}
                </TextH3>
                <HiChevronUp
                  className={`text-4xl transition ${
                    open == faq.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              <Box
                bgcolor={'custom.whiteToBlack'}
                className={`${
                  open == faq.id
                    ? "block translate-y-0"
                    : "hidden -translate-y-5"
                } transition p-4 rounded-b-2xl`}
              >
                <TextP>{t(faq.info)}</TextP>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
