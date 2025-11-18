import SwiperPaginationIcon from "assets/svg/SwiperPaginationIcon";
import { renderToString } from "react-dom/server";
import { SwiperSlide } from "swiper/react";

export function createSwiperPaginationBullet(index, classname) {
  const element = (
    <span key={index} className={classname}>
      <SwiperPaginationIcon />
    </span>
  );

  return renderToString(element);
}

export function wrapSlides(slides = [], element, className = "", props = {}) {
  const Element = element;

  return slides.map((slide) => (
    <SwiperSlide className={className}>
      <Element slideData={slide} {...props} />
    </SwiperSlide>
  ));
}
