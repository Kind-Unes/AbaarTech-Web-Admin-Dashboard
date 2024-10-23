import React from "react";

function MapLegend() {
  return (
    <div className="bg-white p-4 mt-4 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Sales by Location - Legend</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#800026] mr-1"></div>
          <span className="text-[12px]">90K+</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#BD0026] mr-1"></div>
          <span className="text-[12px]">60K - 90K</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#E31A1C] mr-1"></div>
          <span className="text-[12px]">30K - 60K</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FC4E2A] mr-1"></div>
          <span className="text-[12px]">10K - 30K</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FD8D3C] mr-1"></div>
          <span className="text-[12px]">5K - 10K</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FEB24C] mr-1"></div>
          <span className="text-[12px]">&lt; 5K</span>
        </div>
      </div>
    </div>
  );
}

export default MapLegend;
