import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./style.scss";

import { wrapSlides } from "utils";
import Supporter from "modules/supporter/Supporter";

import amazonImg from "assets/images/supporters/amazon.png";
import dribbbleImg from "assets/images/supporters/dribbble.png";
import hubspotImg from "assets/images/supporters/hubspot.png";
import netflixImg from "assets/images/supporters/netflix.png";
import notionImg from "assets/images/supporters/notion.png";
import zoomImg from "assets/images/supporters/zoom.png";

const SUPPORTERS = [
  {
    image: amazonImg,
    alt: "Amazon logo.",
  },
  {
    image: dribbbleImg,
    alt: "Dribbble logo.",
  },
  {
    image: hubspotImg,
    alt: "HubSpot logo.",
  },
  {
    image: notionImg,
    alt: "Notion logo.",
  },
  {
    image: netflixImg,
    alt: "Netflix logo.",
  },
  {
    image: zoomImg,
    alt: "Zoom logo.",
  },
];

export default function Supporters() {
  return (
    <Swiper
      className="supporters-swiper min-w-full max-w-full"
      loop={true}
      slidesPerView="auto"
      watchOverflow={true}
      allowTouchMove={false}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      spaceBetween={50}
      speed={3000}
      modules={[Autoplay]}
      enabled={true}
      breakpoints={{
        640: {
          spaceBetween: 60,
        },
        768: {
          spaceBetween: 70,
        },
        1024: {
          spaceBetween: 80,
        },
        1280: {
          spaceBetween: 90,
        },
        1536: {
          spaceBetween: 120,
        },
      }}
    >
      {wrapSlides(SUPPORTERS, Supporter)}
      {wrapSlides(SUPPORTERS, Supporter)}
    </Swiper>
  );
}
