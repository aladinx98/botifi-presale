import React from "react";
import "./Header.css";
import site_logo from "../Assets/site-new-png.png";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import HeaderSocialMedia from "./HeaderSocialMedia";

export default function Header() {
  const sidebarHandler = () => {
    document.body.classList.toggle("sidebar-show");
  };
  return (
    <div className="px-4 py-3 border-b w-full header-wrapper border-[#818181ba]">
      <div className="flex relative items-center justify-between max-w-[1600px] mx-auto">
        <Link to="/">
          <img className="w-[100px] sm:w-[120px]" src={site_logo} alt="" />
        </Link>
        {/* <div className="hidden lg:flex space-x-3 lg:space-x-5 2xl:space-x-8">
          <HeaderLinks />
        </div> */}
        {/* <div className="hidden lg:flex space-x-5">
          <HeaderSocialMedia />
        </div> */}
        <div className="flex space-x-3 items-center">
          <button
            onClick={() => window.open("https://Botifi.ai", "_blank")}
            className="px-3 sm:px-6 py-2 primary-btn-style"
          >
            Return to Main Website
          </button>

          {/* <div
            onClick={sidebarHandler}
            className="flex lg:hidden flex-col cursor-pointer space-y-2 py-1 w-[30px]"
          >
            <span className="w-full h-[3px] rounded-xl bg-white"></span>
            <span className="w-full h-[3px] rounded-xl bg-white"></span>
            <span className="w-full h-[3px] rounded-xl bg-white"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
