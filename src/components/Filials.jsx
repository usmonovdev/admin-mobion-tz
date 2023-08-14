import React from "react";
import { useTranslation } from "react-i18next";
import { TextP } from "../mui-customizations/Typography";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const filials = [
  {
    id: 1,
    location: "https://yandex.ru/maps/-/C-uGjgd",
    short_location: "Gagarin koʻchasi, Samarqand",
    name: "Do'kon",
    time: "09:00 / 18:00",
  },
  {
    id: 2,
    location: "https://yandex.ru/maps/-/C-uKa9r",
    short_location: "Gagarin koʻchasi, Samarqand",
    name: "Do'kon",
    time: "09:00 / 18:00",
  },
  {
    id: 3,
    location: "https://yandex.ru/maps/-/C-uGjgd",
    short_location: "Gagarin koʻchasi, Samarqand",
    name: "Do'kon",
    time: "09:00 / 18:00",
  },
];

const Filials = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  return (
    <div className="w-full overflow-x-auto my-6 phone:h-[500px] pb-4 h-fit">
      <table className="border w-full table-auto min-w-[560px]">
        <thead>
          <tr
            className={`${
              palette.mode == "light" ? "bg-[#F3F3F3]" : "bg-[#FFFFFF0D]"
            }`}
          >
            <th className="p-4">
              <TextP className="text-start">{t("filial.shop")}</TextP>
            </th>
            <th className="p-4">
              <TextP className="text-center">{t("filial.location")}</TextP>
            </th>
            <th className="p-4">
              <TextP className="text-end">{t("filial.order")}</TextP>
            </th>
          </tr>
        </thead>
        <tbody>
          {filials.map((filial) => {
            return (
              <tr className="border">
                <td className="p-4">{filial.name}</td>
                <td className="p-4 text-center">
                  <Link to={filial.location}>{filial.short_location}</Link>
                </td>
                <td className="p-4 text-end">{filial.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Filials;
