import { useEffect, useState } from "react";

import "./style.scss";

import Logo from "components/logo/Logo";
import Menu from "./Menu";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`header container sticky top-0 z-10 mt-[40px] flex items-center justify-between bg-white py-[20px] transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <Logo />
      <Menu isHidden={hidden}>
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Use Cases</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
      </Menu>
    </header>
  );
}
