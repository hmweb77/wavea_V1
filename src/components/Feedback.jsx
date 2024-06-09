"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Star from "@/assets/starFeedback.svg";
import Image from "next/image";
const Feedback = () => {
  const feedbackClients = [
    {
      index: 1,
      nameC: " Joana MESQUITA  - CEO Traveles",
      description:
        "“I had a wonderful experience and I would highly recommend this business to others.”",
    },
    {
      index: 2,
      nameC: "Zouhir CHBAKOU  - CEO Financebdarija",
      description: "“I had an outstanding experience and would highly recommend this business to anyone looking for exceptional service.”",
    },
    {
      index: 3,
      nameC: "João DUARTE  - CEO Solardosbicos",
      description:
        "“I had a great experience working with this creative agency and would enthusiastically recommend their professional and results-driven approach to others.”",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mt-28 mb-24 md:mb-56 ml-36 mr-36">
      <h5 className="text-blue-200 text-4xl md:text-5xl font-bold leading-130 font-montserrat w-300 h-120 md:w-382 md:h-120 pr-8 md:pr-1">
        WHAT OTHERS SAY ABOUT US
      </h5>
      <div className="w-390 md:w-500">
        <Swiper
          modules={[ Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          pagination={{ clickable: true }}       
        >
          {feedbackClients.map((feedback) => (
            <SwiperSlide key={feedback.index}>
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <Image src={Star} alt="star" className="w-153 h-27" />
                </div>
                <p className="text-blue-500 text-2xl leading-160 font-Lexend md:w-500 w-308 ">
                  {feedback.description}
                </p>
                <p className="text-blue-500 text-lg leading-180 w-280 pb-10">
                  {feedback.nameC}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
