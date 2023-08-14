import { Box } from "@mui/material";
import { LiaTimesSolid } from "react-icons/lia";
import { Catalog, CatalogMobile, ConnectMobile, Language, ThemeToggle } from "../../ui-helpers";
import { navbarLinks } from "../../data/navbar";
import { TextP } from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Mobile = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <Box
      position={"absolute"}
      top={"0"}
      left={"0"}
      zIndex={"2000"}
      width={"100%"}
      bgcolor={"custom.blueOpacity"}
    >
      {open ? (
        <Box
          width={"70%"}
          maxWidth={"600px"}
          height={"100vh"}
          className="p-6"
          bgcolor={"custom.background"}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          sx={{
            "@media screen and (max-width: 450px)": {
              width: "80%"
            }
          }}
        >
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <LiaTimesSolid
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(!open)}
              />
              <ThemeToggle />
            </Box>
            <ul className="flex flex-col gap-4 mt-6">
              <CatalogMobile />
              {navbarLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="flex flex-row items-center border border-t-0 border-r-0 border-l-0 pb-3 gap-1 cursor-pointer"
                    onClick={() => navigate(link.link)}
                  >
                    <TextP className="hover:text-[#02C981] transition">{t(link.label)}</TextP>
                  </li>
                );
              })}
              <li>
                <Language />
              </li>
            </ul>
          </Box>
          <ConnectMobile />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Mobile;
