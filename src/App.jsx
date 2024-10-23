import React, { useState, useEffect } from "react";
import "./global.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

// Placeholder components for other screens
const Projects = () => <div className="p-4">Projects Page (Placeholder)</div>;
const Countries = () => <div className="p-4">Countries Page (Placeholder)</div>;
const Orders = () => <div className="p-4">Orders Page (Placeholder)</div>;
const Customers = () => <div className="p-4">Customers Page (Placeholder)</div>;
const Support = () => <div className="p-4">Support Page (Placeholder)</div>;
const Settings = () => <div className="p-4">Settings Page (Placeholder)</div>;
const Services = () => <div className="p-4">Services Page (Placeholder)</div>;

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);
  const [activeScreen, setActiveScreen] = useState("Dashboard"); // State for active screen
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const smallSizeMediaQuery = window.matchMedia("(max-width: 768px)");
    const largeSizeMediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (smallSizeMediaQuery.matches) {
        setIsNavBarOpen(false);
      }
      if (largeSizeMediaQuery.matches) {
        setIsNavBarOpen(true);
      }
    };

    smallSizeMediaQuery.addListener(handleResize);
    handleResize();

    return () => {
      smallSizeMediaQuery.removeListener(handleResize);
    };
  }, []);

  // Function to render the active screen
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "Dashboard":
        return <Dashboard isNavBarOpen={isNavBarOpen} />;
      case "Projects":
        return <Projects />;
      case "Countries":
        return <Countries />;
      case "Orders":
        return <Orders />;
      case "Customers":
        return <Customers />;
      case "Services":
        return <Services />;
      case "Profile":
        return <div className="p-4">Profile Page (Placeholder)</div>;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard isNavBarOpen={isNavBarOpen} />;
    }
  };

  return (
    <>
      <SideBar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
        setActiveScreen={setActiveScreen}
      />
      <NavBar
        setSelectedIndex={setSelectedIndex}
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
        setActiveScreen={setActiveScreen}
      />

      {/* Render the active screen */}
      {renderActiveScreen()}
    </>
  );
}

export default App;
