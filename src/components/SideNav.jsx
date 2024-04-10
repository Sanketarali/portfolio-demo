import React from "react";
import { HiOutlineHome, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
  FaTwitter,
  FaXTwitter
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="w-[100%] h-[84vh] flex flex-col my-6 bg-neutral-900 text-[14px] text-white rounded-md">
      <div className="w-[100%] flex flex-col gap-4 p-4">
        <h2 className="text-white text-[16px] font-bold border-b border-neutral-900 pb-2">
          Go to
        </h2>
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
              : " flex items-center font-medium px-4 py-2 gap-2 hover:shadow-md text-white border hover:border-0 rounded-md"
          }
        >
          <HiOutlineArrowTrendingUp size={24} />
          Resume
        </NavLink>
      </div>
      <div className="w-[100%] flex flex-col text-white gap-4 p-4">
        <h2 className="text-white text-[16px] font-bold border-b border-neutral-500 pb-2">
          Socials
        </h2>
        <NavLink
          to="https://www.instagram.com/sanket_arali"
          target="_/blank"
          className="flex gap-4 items-center hover:text-neutral-400 "
        >
          <FaInstagram size={24} />
          Instagram
        </NavLink>
        <NavLink
          to="https://github.com/Sanketarali"
          target="_/blank"
          className="flex gap-4 items-center hover:text-neutral-400 "
        >
          <FaGithub  size={24} />
          Github
        </NavLink>
        
        <NavLink
          to="https://www.linkedin.com/in/sanketarali/"
          target="_/blank"
          className="flex gap-4 items-center hover:text-neutral-400 "
        >
          <FaLinkedin  size={24} />
          Linkedin
        </NavLink>
        <NavLink
          to="https://twitter.com/SanketArali"
          target="_/blank"
          className="flex gap-4 items-center hover:text-neutral-400  "
        >
          <FaXTwitter  size={24} />
          Twitter
        </NavLink>
      </div>
    </div>
  );
}
