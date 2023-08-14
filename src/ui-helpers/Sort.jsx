import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheck2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { TextP } from "../mui-customizations/Typography";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Sort = ({ data, selected, setSelected }) => {
  const { t } = useTranslation();
  const { palette } = useTheme()
  return (
    <div className="phone:w-[200px] w-full z-[1000]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Box bgcolor={"custom.contact"} className="rounded-lg border border-[#02C981]">
            <Listbox.Button className="relative w-full cursor-pointer py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <TextP className="block truncate">{t(selected.name)}</TextP>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <IoIosArrowDown className="h-5 w-5 text-gray-400" />
              </span>
            </Listbox.Button>
          </Box>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${palette.mode == "light" ? "bg-[#F6F7F9]" : "bg-[#2C2C2C]"}`}>
                {data.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#02C981]/[0.4] text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <TextP
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {t(person.name)}
                        </TextP>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <BsCheck2 className="h-5 w-5 text-[#02C981]"/>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Sort;
