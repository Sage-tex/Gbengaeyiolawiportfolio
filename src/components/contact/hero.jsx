import "../style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import carousel1 from "../../assets/carousel1.svg";
import carousel2 from "../../assets/carousel2.svg";
import carousel3 from "../../assets/carousel3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
function ContactHero() {
  return (
    <div className=" ">
      <Swiper
        className="h-[330px] lg:h-[600px]"
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        navigation={true}
        slidesPerView={1}
      >
        <SwiperSlide className="text-white">
        <div className=" relative">
        <img src={carousel1} alt="" className="h-full w-full object-cover" />
        <p className="bg-[#00000066] py-[18px] text-center italic  absolute top-[450px] text-white text-[35px] font-[500] w-full font-poppins">"Meeting Ooni of Ife"</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="text-green-600">
        <div className=" relative">
        <img src={carousel3} alt="" className="h-full w-full object-cover" />
        <p className="bg-[#00000066] py-[18px] text-center italic  absolute top-[450px] text-white text-[35px] font-[500] w-full font-poppins">"Meeting Ooni of Ife"</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
        <div className=" relative">
        <img src={carousel2} alt="" className="h-full w-full object-cover" />
        <p className="bg-[#00000066] py-[18px] text-center italic  absolute top-[450px] text-white text-[35px] font-[500] w-full font-poppins">"Meeting Ooni of Ife"</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
        <div className=" relative">
        <img src={carousel1} alt="" className="h-full w-full object-cover" />
        <p className="bg-[#00000066] py-[18px] text-center italic  absolute top-[450px] text-white text-[35px] font-[500] w-full font-poppins">"Meeting Ooni of Ife"</p>
        </div>
        </SwiperSlide>
      </Swiper>

      <div className="h-[10px] lg:h-[30px] about"></div>
    </div>
  );
}

export default ContactHero;
