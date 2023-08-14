import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TextP } from "../mui-customizations/Typography";

const ConnectMobile = () => {
  const { t } = useTranslation()
  return (
    <Box
      bgcolor={"primary.main"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"10px"}
      borderRadius={"50px"}
      className="cursor-pointer"
      maxWidth={'400px'}
      sx={{
        position: "relative",
        left:"50%",
        transform: "translateX(-50%)"
      }}
    >
      <TextP>{t("helpers.connect")}</TextP>
    </Box>
  );
};

export default ConnectMobile;
