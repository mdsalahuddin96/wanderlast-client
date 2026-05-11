"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { BiCalendarEvent, BiMap, BiStar } from "react-icons/bi";
import { HiArrowUpRight, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import "swiper/css";
import { Button } from "@heroui/react";
import { useRef, useState } from "react";


export default function FeaturedDestination({ featuredDes }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        slidesPerView={2.2}
        spaceBetween={24}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.2,
          },
        }}
        className="!overflow-visible"
      >
        {featuredDes.map((des, index) => (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden group">
              <div className="max-w-120 relative">
                <div className="flex items-center justify-center w-15 text-xs font-medium px-2 py-1 absolute right-5 top-5 rounded glass">{des.rating}<BiStar/></div>
                <Image
                  src={des.imageUrl}
                  alt={des.destinationName}
                  height={600}
                  width={600}
                  className="w-full object-cover"
                />
                <div className="flex items-center gap-1.5 mt-3 text-gray-600">
                  <BiMap />
                  <span>{des.country}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl text-black font-medium">
                    {des.destinationName}
                  </h1>
                  <p className="text-2xl font-medium">
                    ${des.price}
                    <span className="text-sm  text-gray-500">/person</span>
                  </p>
                </div>
                <div className="text-gray-600 flex items-center gap-2">
                  <BiCalendarEvent />
                  <p>
                    {des.duration}/{des.duration.split(" ")[0] - 1} Nights
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-5 border-[#15a1bf] rounded-lg text-[#15a1bf]"
                >
                  Book Now <HiArrowUpRight />{" "}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-between mt-10">
        {/* counter */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <span className="text-sm text-black whitespace-nowrap">
            {currentSlide}/{featuredDes.length}
          </span>

          <div className="h-[1px] w-full bg-gray-300 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
              style={{
                width: `${(currentSlide / featuredDes.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* arrows */}
        <div className="flex items-center gap-3 ml-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition"
          >
            <HiOutlineArrowLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition"
          >
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
