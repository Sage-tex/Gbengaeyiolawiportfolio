import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../../assets/test1.jpg";
import carousel2 from "../../assets/test2.jpg";
import carousel3 from "../../assets/test3.jpg";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

function Testimonials() {
  return (
    <Swiper
      className=""
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
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="p-[20px] lg:p-[40px] text-white flex flex-col items-center border-t mt-[40px]">
          <p className="text-[#AE8625] font-poppins text-[20px] lg:text-[34px] font-[500]">
            TESTIMONIALS
          </p>
         
          <div className="mt-[40px] flex flex-col items-center justify-center">
            <div className="h-[100px] lg:h-[140px] w-[100px] lg:w-[140px] border rounded-full">
              <img src={carousel3} className="h-full w-full rounded-full object-cover" alt="" />
            </div>
            <p className="mt-[40px] font-poppins text-center">
            Traditional rulers should support Gbenga to ensure success in his contribution to the development of the country, stressing that his contributions have provided job opportunities for the youths and as well providing food for the masses.

            </p>
            <p className="mt-[30px] font-poppins font-[800]">Alhaji Abubakar Yahaya
</p>
            <p className="text-[16px] font-poppins">Etsu Nupe of Niger
</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-[20px] lg:p-[40px] text-white flex flex-col items-center border-t mt-[40px]">
          <p className="text-[#AE8625] font-poppins text-[20px] lg:text-[34px] font-[500]">
            TESTIMONIALS
          </p>
          
          <div className="mt-[40px] flex flex-col items-center justify-center">
            <div className="h-[100px] lg:h-[140px] w-[100px] lg:w-[140px] border rounded-full">
            <img src={carousel2} className="h-full w-full rounded-full object-cover" alt="" />
            </div>
            <p className="mt-[40px] font-poppins text-center">
              
Nigerian youths need to take a cue from Gbenga who is a youth, and engage in local food production through agricbusiness, this will make our country a food Independent nation, I mean, the process will put our nation on the food production list, and with that, there will be food for us all in abundance

We also give our collective support as traditional rulers from the Northern part of Nigeria to the young CEO, who has done a lot in his capacity to ensure that the country is free from importing foods stuff from other countries.

            </p>
            <p className="mt-[30px] font-poppins font-[800]">Alhaji Ado Bayero
</p>
            <p className="text-[16px] font-poppins">Emir of Kano
</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-[20px] lg:p-[40px] text-white flex flex-col items-center border-t mt-[40px]">
          <p className="text-[#AE8625] font-poppins text-[20px] lg:text-[34px] font-[500]">
            TESTIMONIALS
          </p>
          
          <div className="mt-[40px] flex flex-col items-center justify-center">
            <div className="h-[100px] lg:h-[140px] w-[100px] lg:w-[140px] border rounded-full">
            <img src={carousel1} className="h-full w-full rounded-full object-cover" alt="" />
            </div>
            <p className="mt-[40px] font-poppins text-center">
            "Some of our youths, like Gbenga here are so serious, and we have to support them to thrive in their legitimate businesses. We have to give them all the support they need to succeed in their businesses.”

"I commend Gbenga and a couple of others across the country for standing up to the challenges in the competitive market.”

            </p>
            <p className="mt-[30px] font-poppins font-[800]">Ooni Adeyeye Enitan Ogunwusi
</p>
            <p className="text-[16px] font-poppins">Ooni of Ife
</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testimonials;
