import icon from "../image/icons/phone-green.svg";

const Tel = () => {
  return (
    <a href="tel:+998943320016" className="z-[2000] fixed bottom-[50px] right-[50px]">
    <div className="w-[50px] h-[50px] bg-[#CCF4E6] rounded-full flex items-center justify-center shadow cursor-pointer">
      <img src={icon} />
    </div>
    </a>
  );
};

export default Tel;
