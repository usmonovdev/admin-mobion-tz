import { useEffect, useState } from "react";
import axios from "../../utils/axios-config";
import { GET_ADS } from "../../utils/api-links";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import { Box, CircularProgress } from "@mui/material";

const Hero = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(GET_ADS);
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data.length <= 0 ? (
        <>
          {isLoading ? (
            <Box className="w-full laptop:h-[350px] phone:h-[200px] h-[100px] rounded-2xl flex items-center justify-center" bgcolor={'custom.contact'}>
              <CircularProgress />
            </Box>
          ) : (
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                className="mySwiper"
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              >
                {data.map((data) => {
                  return (
                    <SwiperSlide>
                      <Link to={`/product/${data}`}>
                        <img
                          key={data}
                          src={data.image}
                          alt={data.title == "title"}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="absolute flex flex-row justify-between w-full laptop:translate-y-1/2 translate-y-0 top-2/4 z-[1000] px-3">
                <button className="arrow-right arrow tablet:w-[40px] w-[30px] tablet:h-[40px] h-[30px] rounded-full bg-[#02C981]/[0.4] flex items-center justify-center">
                  <IoIosArrowBack />
                </button>
                <button className="arrow-left arrow tablet:w-[40px] w-[30px] tablet:h-[40px] h-[30px] rounded-full bg-[#02C981]/[0.4] flex items-center justify-center">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Hero;
