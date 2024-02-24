import React from "react";
import { Link } from "react-router-dom";
import site_logo from "../../Components/Assets/site_logo.png";
import HeaderLinks from "./HeaderLinks";
import HeaderSocialMedia from "./HeaderSocialMedia";

const Sidebar = () => {
  const sidebarHandler = () => {
    document.body.classList.toggle("sidebar-show");
  };
  return (
    <>
      <aside className="flex flex-col space-y-7 lg:hidden fixed top-0 z-[10000] left-0 h-screen w-[250px] bg-black">
        <Link className=" mx-auto" to="/">
          <img className="w-[190px]" src={site_logo} alt="" />
        </Link>

        <div className="flex pl-8 space-y-7 flex-col">
          <div className="flex flex-col space-y-3 lg:space-y-5 2xl:space-y-8">
            <HeaderLinks />
          </div>
          <div className=" flex space-x-5">
            <HeaderSocialMedia />
          </div>
        </div>
      </aside>

      <div onClick={sidebarHandler} className="overlay z-[9999]"></div>
    </>
  );
};

export default Sidebar;
