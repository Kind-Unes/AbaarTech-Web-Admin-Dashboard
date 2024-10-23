/* eslint-disable */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faBell as faRegularBell,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

function NavBar({
  isNavBarOpen,
  setIsNavBarOpen,
  setActiveScreen,
  setSelectedIndex,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`pr-6 h-[70px] w-full bg-white flex justify-end items-center
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

      <div className="pr-10 hidden sm:block"></div>
      {/* search bar */}
      <input
        type="text"
        placeholder="Search"
        className="hidden sm:block h-10 w-[300px] outline-1 outline-slate-600 border-spacing-1 border-2 bg-gray-100 rounded-lg px-4"
      />

      <div className="flex-grow"></div>
      {/* Notifications */}
      <FontAwesomeIcon icon={faEnvelope} className="size-6 cursor-pointer" />

      <div className="pr-5"></div>

      <FontAwesomeIcon icon={faRegularBell} className="size-6 cursor-pointer" />

      <div className="pr-4"></div>

      <div className="h-10 bg-blue-100 w-[1px] rounded-xl"></div>

      <div className="pr-4"></div>

      {/* avatar  */}
      <div className="h-10 w-10 bg-gray-700 rounded-full cursor-pointer"></div>

      <div className="pr-4"></div>

      {/* profile */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px]">AabarTech</p>
        <p className="font-[400] text-[14px] text-gray-400">Manager</p>
      </div>
      <div className="pr-7"></div>

      {/* dropdown */}
      <div className="relative">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faChevronDown}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            <a
              href="#"
              onClick={() => {
                setIsDropdownOpen(false);
                setSelectedIndex(5);
                setActiveScreen("Profile");
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              onClick={() => {
                setIsDropdownOpen(false);
                setSelectedIndex(6);
                setActiveScreen("Settings");
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
