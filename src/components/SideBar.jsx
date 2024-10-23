/* eslint-disable */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SideBarTile from "./SideBarTile.jsx";

function SideBar({ setIsNavBarOpen, isNavBarOpen }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      className={`px-3 h-screen flex flex-col bg-white w-[250px] fixed top-0 left-0 z-50
      transform ${isNavBarOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out `}
    >
      {/* Close button for small screens (hidden on larger screens) */}
      <FontAwesomeIcon
        icon={faX}
        className={`lg:hidden md:hidden xl:hidden pt-5 pl-2 mr-auto cursor-pointer`} // 'ml-auto' aligns the icon to the right
        onClick={() => setIsNavBarOpen(!isNavBarOpen)}
      />

      {/* Logo Section */}
      <div className="h-16 flex flex-col justify-center align-middle content-center">
        <img src="/src/assets/abar-text.png" alt="Logo" />
      </div>

      {/* Side bar tiles for navigation */}
      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={0}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>

      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={1}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>

      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={2}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>

      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={3}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>

      {/* Spacer to push last tiles to the bottom */}
      <div className="grow"></div>

      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={4}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>

      <SideBarTile
        selectedIndex={selectedIndex}
        tileIndex={5}
        setSelectedIndex={setSelectedIndex}
      ></SideBarTile>
    </div>
  );
}

export default SideBar;
