import { useEffect, useState } from "react";

import HamburgerMenuIcon from "assets/svg/HamburgerMenuIcon";

import "./style.scss";

export default function Menu({ children, isHidden }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isHidden) setIsOpen(false);
  }, [isHidden]);

  let menuClass = "max-lg:hidden";
  if (isOpen) menuClass = "menu";

  function openMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative overflow-visible">
      <nav
        className={"flex items-center ~lg/2xl:~gap-[20px]/[40px] " + menuClass}
      >
        {children}
        <button className="btn btn-border w-max">Request a qoute</button>
      </nav>

      <button
        onClick={openMenu}
        className={`h-[70px] w-[70px] rounded-[15px] transition-colors lg:hidden ${isOpen ? "bg-green" : ""}`}
      >
        <HamburgerMenuIcon />
      </button>
    </div>
  );
}
