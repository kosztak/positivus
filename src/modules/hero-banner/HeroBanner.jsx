import heroImg from "assets/images/hero-image.png";
import Supporters from "modules/supporters/Supporters";

import "./style.scss";

export default function HeroBanner() {
  return (
    <div className="container flex flex-col ~gap-[50px]/[70px]">
      <div className="hero-banner">
        <h1>Navigating the digital landscape for success</h1>

        <figure className="max-md:mx-[20px]">
          <img src={heroImg} alt="A megaphone surrounded with icons." />
        </figure>

        <p className="~text-[18px]/[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <button className="btn btn-dark">Book a consultation</button>
      </div>

      <Supporters />
    </div>
  );
}
