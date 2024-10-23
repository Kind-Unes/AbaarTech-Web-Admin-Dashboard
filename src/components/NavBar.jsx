/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import { faBell as faRegularBell } from "@fortawesome/free-regular-svg-icons"

function NavBar({ isNavBarOpen, setIsNavBarOpen }) {
  return (
    <div
      className={`pr-3 h-14 w-full bg-white flex justify-end items-center
         transition-all duration-300 ease-in-out ${
           isNavBarOpen ? "pl-[250px]" : "pl-1"
         }`}
    >
      <FontAwesomeIcon
        icon={faBars}
        className={`    
        ${isNavBarOpen ? "hidden" : "block"}
        lg:block
        xl:block
        md:block
        pl-1
        ml-4 cursor-pointer
        `}
        onClick={() => setIsNavBarOpen(!isNavBarOpen)}
      />
      <div className="flex-grow"></div>

      {/* Notifications */}
      <FontAwesomeIcon
        icon={faRegularBell}
        className="size-5
        cursor-pointer
        "
      ></FontAwesomeIcon>

      <div className="pr-4"></div>

      {/* avatar  */}
      <div className="h-9 w-9 bg-gray-700 rounded-full cursor-pointer"></div>

      <div className="pr-4"></div>

      {/* profile */}
      <div className="flex flex-col ">
        <p className="font-semibold text-[14px]">AabarTech</p>
        <p className="font-[400] text-[12px]  text-gray-400">Manager</p>
      </div>
      <div className="pr-4"></div>
      {/* dropdown */}

      <FontAwesomeIcon
        className="cursor-pointer"
        icon={faChevronDown}
        onClick={() => {
          console.log("Chevron down clicked");
        }}
      ></FontAwesomeIcon>
    </div>
  );
}

export default NavBar;
