import React, { useState } from "react";
import { TextHeader, TextP } from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { Alert, Box, Snackbar } from "@mui/material";
import location from "../../image/icons/location.svg";
import phoneIcon from "../../image/icons/phone-green.svg";
import mailIcon from "../../image/icons/mail.svg";
import telegram from "../../image/icons/telegram-green.svg";
import instagram from "../../image/icons/instagram-green.svg";
import youtube from "../../image/icons/youtube-green.svg";
import facebook from "../../image/icons/facebook-green.svg";
import { useTheme } from "@emotion/react";
import axios from "../../utils/axios-config";
import { POST_EMAIL } from "../../utils/api-links";
import { LoadingButton } from "@mui/lab";
import { IMaskInput } from "react-imask";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{998}000000000"
      definitions={{
        _: /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const Contact = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [mail, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMail = async () => {
    setIsLoading(true);

    if (!name && phone.length < 13 && !mail) {
      setErrorMessage("contact.error.all");
      setIsLoading(false);
      return;
    }

    if (!name) {
      setErrorMessage("contact.error.name");
      setIsLoading(false);
      return;
    }

    if (phone.length < 13) {
      setErrorMessage("contact.error.phone");
      setIsLoading(false);
      return;
    }

    if (!mail) {
      setErrorMessage("contact.error.mail");
      setIsLoading(false);
      return;
    }

    try {
      await axios.post(POST_EMAIL, {
        full_name: name,
        phone_number: phone,
        message: mail,
      });
      setErrorMessage("");
      setMail("");
      setName("");
      setPhone("");
      setIsLoading(false);
      setOpen(true);
    } catch (error) {
      setIsLoading(false);
      if (error.response.status == 429) {
        setErrorMessage("contact.error.many_requests");
      }
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          sx={{ width: "fit-content", color: "#fff" }}
          icon={<BsCheck2 fontSize="inherit" />}
          variant="filled"
          severity="success"
        >
          {t("contact.success")}
        </Alert>
      </Snackbar>
      <div className="contact">
        <TextHeader marginBottom={"30px"}>{t("contact.title")}</TextHeader>
        <Box
          bgcolor={"custom.contact"}
          padding={"20px"}
          className="rounded-2xl w-full flex tablet:flex-row flex-col laptop:gap-0 gap-4"
        >
          <Box className="laptop:w-3/6 w-full">
            <div className="tablet:w-3/5 w-full mx-auto">
              <div className="flex flex-col gap-1 mb-3">
                <TextP>{t("contact.name")}</TextP>
                <input
                  className={`input rounded-lg transition ${
                    palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"
                  }`}
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mb-3">
                <TextP>{t("contact.phone")}</TextP>
                <TextMaskCustom
                  className={`input rounded-lg transition ${
                    palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"
                  }`}
                  type="text"
                  placeholder={t("contact.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <TextP>Label</TextP>
                <textarea
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  rows={4}
                  maxLength={200}
                  placeholder="Label"
                  className={`w-full p-2 transition outline-none rounded-lg ${
                    palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"
                  }`}
                />
              </div>
              {errorMessage ? (
                <TextP className="text-center" sx={{ color: "red !important" }}>
                  {t(errorMessage)}
                </TextP>
              ) : (
                ""
              )}
              <LoadingButton
                loading={isLoading}
                onClick={handleSendMail}
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "30px",
                  color: "#fff",
                }}
                variant="contained"
              >
                {t("contact.submit")}
              </LoadingButton>
            </div>
          </Box>
          <Box className="laptop:w-3/6 w-full">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row gap-3">
                <img src={location} alt="location" />
                <Link to={"https://yandex.uz/maps/-/C-uSaus"}>
                  <TextP>
                    Tashkent, Mirzo-Ulug'bek tumani, Shaxriobod maxallasi
                  </TextP>
                </Link>
              </li>
              <li className="flex flex-row gap-3">
                <img src={phoneIcon} alt="phone" />
                <TextP>
                  <a href="tel:+998943320016">+998 94 332 00 16</a>
                </TextP>
              </li>
              <li className="flex flex-row gap-3">
                <img src={mailIcon} alt="email" />
                <TextP>mobion@gmail.com</TextP>
              </li>
              <ul className="flex flex-row gap-8 mt-3">
                <li>
                  <a href="https://t.me/mobionuz7">
                    <img src={telegram} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/mobion_uz?igshid=Y2I2MzMwZWM3ZA==">
                    <img src={instagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={facebook} />
                  </a>
                </li>
              </ul>
            </ul>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Contact;
