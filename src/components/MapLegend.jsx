import React from "react";

function MapLegend() {
  return (
    <div className="bg-white p-4 mt-4 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Sales by Location - Legend</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#800026] mr-2"></div>
          <span>90,000+</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#BD0026] mr-2"></div>
          <span>60,000 - 90,000</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#E31A1C] mr-2"></div>
          <span>30,000 - 60,000</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FC4E2A] mr-2"></div>
          <span>10,000 - 30,000</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FD8D3C] mr-2"></div>
          <span>5,000 - 10,000</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FEB24C] mr-2"></div>
          <span>&lt; 5,000</span>
        </div>
      </div>
    </div>
  );
}

export default MapLegend;
