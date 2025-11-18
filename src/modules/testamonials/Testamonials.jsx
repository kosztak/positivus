import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import Testamonial from "modules/testamonial/Testamonial";
import SwiperNavigationIcon from "assets/svg/SwiperNavigationIcon";
import { createSwiperPaginationBullet, wrapSlides } from "utils";

const TESTAMONIALS = [
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
];

export default function Testamonials() {
  return (
    <div className="rounded-[45px] bg-gray-dark ~md:~py-[60px]/[80px] max-md:px-[30px] max-md:py-[30px]">
      <Swiper
        className="cursor-default"
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          enabled: true,
          el: ".swiper-pagination",
          renderBullet: createSwiperPaginationBullet,
        }}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          addIcons: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        }}
      >
        {wrapSlides(TESTAMONIALS, Testamonial, "!h-auto")}

        <div className="mx-auto flex max-w-[565px] items-center ~mt-[90px]/[125px]">
          <div className="swiper-button-prev cursor-pointer [&>svg]:rotate-180">
            <SwiperNavigationIcon />
          </div>
          <div className="swiper-pagination static"></div>
          <div className="swiper-button-next cursor-pointer">
            <SwiperNavigationIcon />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
