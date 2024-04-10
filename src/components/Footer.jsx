import React from "react";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"; // Assuming react-icons version 6 with "fa6"
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full text-white bg-neutral-900 p-4 lg:h-20 gap-2 flex flex-col lg:flex-row justify-between items-center rounded-md shadow-sm mt-8 mb-2">
      {/* Added mt-8 for margin-top, adjust the value as needed */}
      <div className="flex flex-col lg:flex-row items-center space-x-4 space-y-1">
        <h1 className="flex items-center font-semibold gap-2 text-[20px] text-text">
          Sanket Arali
        </h1>
        <span className="hidden lg:flex">|</span>
        <p className="text-[16px]">copyright © {currentYear} Sanket Arali </p>
      </div>
      <div className="flex gap-6">
        <NavLink to="https://www.instagram.com/sanket_arali" target="_blank">
          <FaInstagram className="hover:text-neutral-500" size={18} />
        </NavLink>
        <NavLink
          to="https://github.com/Sanketarali"
          target="_blank"
          className="flex gap-4 items-center"
        >
          <FaGithub className="hover:text-neutral-500" size={18} />
        </NavLink>
        {/* <NavLink to="https://www.youtube.com/@" target="_blank">
          <FaYoutube className="hover:text-neutral-500" size={18} />
        </NavLink> */}
        <NavLink
          to="https://www.linkedin.com/in/sanketarali/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-neutral-500" size={18} />
        </NavLink>
        <NavLink
          to="https://twitter.com/SanketArali"
          target="_blank"
          className="flex gap-4 items-center hover:text-border"
        >
          <FaXTwitter className="hover:text-neutral-500" size={18} />
        </NavLink>
      </div>
    </div>
  );
}
