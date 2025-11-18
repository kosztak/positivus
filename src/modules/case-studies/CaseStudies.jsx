import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import CaseStudy from "modules/case-study/CaseStudy";
import { createSwiperPaginationBullet, wrapSlides } from "utils";

import "./style.scss";

const STUDIES = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <div className="rounded-[45px] bg-gray-dark ~px-[40px]/[60px] ~pt-[50px]/[70px]">
      <Swiper
        className="case-studies w-full"
        modules={[Pagination]}
        slidesPerView={1}
        watchOverflow={true}
        pagination={{
          clickable: true,
          renderBullet: createSwiperPaginationBullet,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 130,
          },
        }}
      >
        {wrapSlides(STUDIES, CaseStudy, "!h-auto")}
      </Swiper>
    </div>
  );
}
