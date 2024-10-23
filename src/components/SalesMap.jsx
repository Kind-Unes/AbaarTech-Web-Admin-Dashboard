import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS

// Sales data with correct ISO 3-letter country codes
const salesData = [
  { id: "DZA", value: 99995 }, // Algeria
  { id: "SAU", value: 99995 }, // Saudi Arabia
  { id: "USA", value: 45000 }, // USA
  { id: "CHN", value: 85000 }, // China
  { id: "BRA", value: 60000 }, // Brazil
];

// Function to determine the color based on sales value
const getColor = (value) => {
  return value > 90000
    ? "#800026"
    : value > 60000
    ? "#BD0026"
    : value > 30000
    ? "#E31A1C"
    : value > 10000
    ? "#FC4E2A"
    : value > 5000
    ? "#FD8D3C"
    : "#FEB24C";
};

// Function to style each country based on sales data
const getStyle = (feature) => {
  const countryData = salesData.find(
    (country) => country.id === feature.properties.ISO_A3 // Ensure 'ISO_A3' exists
  );

  // Fallback style if no sales data is found for the country
  return {
    fillColor: countryData ? getColor(countryData.value) : "#f0f0f0",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
};

// Function to handle hover and click interactions
const onEachCountry = (feature, layer) => {
  const countryData = salesData.find(
    (country) => country.id === feature.properties.ISO_A3
  );

  layer.on({
    mouseover: (e) => {
      const layer = e.target;
      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.9,
      });
    },
    mouseout: (e) => {
      const layer = e.target;
      layer.setStyle(getStyle(layer.feature)); // Reset to original style
    },
    click: () => {
      alert(
        `${feature.properties.ADMIN}: ${
          countryData ? countryData.value : "No Data"
        }`
      );
    },
  });
};

// Map component using react-leaflet
function SalesMap({ geoJsonData }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {" "}
      {/* Ensure container takes full space */}
      <MapContainer
        style={{ height: "100%", width: "100%" }} // Make the map fill its container
        zoom={2}
        center={[20, 0]} // Center the map on the world
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={getStyle}
            onEachFeature={onEachCountry}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default SalesMap;
