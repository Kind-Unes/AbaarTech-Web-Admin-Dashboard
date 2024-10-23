import React, { useState, useEffect } from "react";
import "./global.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SalesMap from "./components/SalesMap";
import SalesChart from "./components/SalesChart";
import TopSellingProjects from "./components/TopSellingProjects";
import SalesByLocation from "./components/SalesByLocation";
import RecentOrders from "./components/RecentOrders";
import MapLegend from "./components/MapLegend";
import TopStats from "./components/TopStats";

function App() {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);

  useEffect(() => {
    fetch("/countries.geojson")
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data))
      .catch((error) => console.error("Error fetching GeoJSON data:", error));
  }, []);

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

  return (
    <>
      <SideBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
      <NavBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />

      <div
        className={`${
          isNavBarOpen ? "ml-[250px]" : ""
        } transition-all p-6 duration-300 ease-in-out`}
      >
        {/* Add the Top Stats Section */}
        <TopStats />

        {/* Sales Map and Statistics Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 shadow rounded-lg lg:col-span-1">
            <h2 className="text-xl font-bold">Sales by Location</h2>
            <div className="h-64 relative">
              {geoJsonData ? (
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <SalesMap geoJsonData={geoJsonData} />
                </div>
              ) : (
                <p>Loading map...</p>
              )}
            </div>
            <MapLegend />
          </div>

          <div className="bg-white p-6 shadow rounded-lg lg:col-span-2 h-full">
            <h2 className="text-xl font-bold">Statistics</h2>
            <div className="h-96">
              <SalesChart />
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TopSellingProjects />
          <SalesByLocation />
        </div>

        <RecentOrders />
      </div>
    </>
  );
}

export default App;
