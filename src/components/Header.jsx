import React, { useState } from "react";
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineHome,
  HiOutlineArrowTrendingUp,
  HiOutlineCodeBracket,
} from "react-icons/hi2";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
  FaTwitter,
  FaXTwitter
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className="w-full h-[70px] items-center px-6 flex justify-between shadow-sm ">
      <div className="flex space-x-1">
        <NavLink
          to="/"
          className="flex items-center font-semibold gap-2 text-xl lg:text-2xl text-white rounded-full"
        >
          {/* <FaCode size={28} /> */}
          Sanket Arali 
        </NavLink>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* <NavLink
          to="/contact"
          className="flex items-center p-2 rounded-md bg-neutral-100 hover:bg-neutral-800 hover:text-white text-[14px] font-semibold gap-1 shadow-md"
        >
          Contact Me
        </NavLink> */}

        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="text-white block lg:hidden"
        >
          {nav ? <HiOutlineXMark size={28} /> : <HiOutlineBars3 size={28} />}

          {nav && (
            <div
              className={
                nav
                  ? "absolute top-[70px] right-0 w-[100%] h-[520px] z-10 bg-neutral-800 text-[14px] font-semibold border-b shadow-md"
                  : "absolute top-[100%]"
              }
            >
              <div className="w-[100%] flex flex-col gap-4 p-8">
              <h2 className="text-white text-[16px] font-bold border-b border-neutral-500 pb-2">Go to</h2>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center px-4 py-2 gap-2 bg-neutral-100 text-black border border-neutral-950 rounded-md "
                      : " flex items-center font-medium px-4 py-2 gap-2 hover:shadow-md text-white border hover:border-0 rounded-md"
                  }
                >
                  <HiOutlineHome size={24} />
                  Home
                </NavLink>
                <NavLink
                  to="/trending"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center px-4 py-2 gap-2 bg-neutral-100 text-black border border-neutral-950 rounded-md "
                      : " flex items-center font-medium px-4 py-2 gap-2 hover:shadow-md bg-bg border border-border hover:border-0 rounded-md"
                  }
                >
                  <HiOutlineArrowTrendingUp size={24} />
                  Resume
                </NavLink>
              </div>
              <div className="w-[100%] flex flex-col gap-4 px-8">
              <h2 className="text-white text-[16px] font-bold border-b border-neutral-500 pb-2">Socials</h2>
                <NavLink
                  to="https://www.instagram.com/sanket_arali"
                  target="_/blank"
                  className="flex gap-4 items-center hover:text-neutral-400 "
                >
                  <FaInstagram className="text-text" size={24} />
                  Instagram
                </NavLink>
                <NavLink
                  to="https://github.com/sanket_arali"
                  target="_/blank"
                  className="flex gap-4 items-center hover:text-neutral-400  "
                >
                  <FaGithub className="text-text" size={24} />
                  Github
                </NavLink>
                {/* <NavLink
                  to="https://www.instagram.com/sanket_arali"
                  target="_/blank"
                  className="flex gap-4 items-center hover:text-neutral-400  "
                >
                  <FaYoutube className="text-text" size={24} />
                  Youtube
                </NavLink> */}
                <NavLink
                  to="https://www.linkedin.com/in/sanketarali/"
                  target="_/blank"
                  className="flex gap-4 items-center hover:text-neutral-400  "
                >
                  <FaLinkedin className="text-text" size={24} />
                  Linkedin
                </NavLink>
                <NavLink
                  to="https://twitter.com/SanketArali"
                  target="_/blank"
                  className="flex gap-4 items-center hover:text-neutral-400  "
                >
                  <FaXTwitter className="text-text" size={24} />
                  Twitter
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
