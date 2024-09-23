import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio Hadil</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Formation
          </li>
        </a>
        <a href="#Exp">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Expériences Professionnelles
          </li>
        </a>
        <a href="#Project">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projets
          </li>
        </a>

        <a
          href="https://drive.google.com/file/d/1a037_aUhNSMN7yYguUBcNf2Kii5nopRU/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Resume
          </li>
        </a>

        <a href="#contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;