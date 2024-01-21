// WeatherCard.js

import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.current_condition || weatherData.current_condition.length === 0) {
    return null; // Return null or some loading indicator if weatherData is not available yet
  }
  const nearestArea = weatherData.nearest_area[0];
  const cityName = nearestArea.areaName[0].value;

  const currentCondition = weatherData.current_condition[0];
  // const getCity = nearestArea.areaName[0].value;

  // Extracting variables from the JSON response
  const temperature = currentCondition.temp_F;
  const windSpeed = currentCondition.windspeedMiles;
  const precipitation = currentCondition.precipMM;


  // Set thresholds for warnings (you can adjust these values)
  const highTemperatureThreshold = 90; // Example threshold in degrees Celsius
  const highWindSpeedThreshold = 20; // Example threshold in km/h
  const lowTemperatureThreshold = 40; // Example threshold in degrees Celsius

  // Determine if there are warnings
  const isHighTemperatureWarning = temperature > highTemperatureThreshold;
  const isHighWindSpeedWarning = windSpeed > highWindSpeedThreshold;
  const isLowTemperatureWarning = temperature < lowTemperatureThreshold;
  const isRainWarning = precipitation > 0.5;

  // Determine if "SEEK SHELTER" warning is needed
  const shouldSeekShelter = isHighTemperatureWarning || isHighWindSpeedWarning || isLowTemperatureWarning || isRainWarning;

  // Set color based on warnings
  const cardColor = shouldSeekShelter ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 0, 255, 0.2)";

  // You can add more styling to customize the appearance of the card
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: cardColor,
  };

  return (
    <div style={cardStyle}>
      <h3>Local Weather Information</h3>
      <p>Temperature: {temperature}°F</p>
      <p>Wind Speed: {windSpeed} mph</p>
      <p>Precipitation: {precipitation} MM</p>
      {shouldSeekShelter && <p style={{ color: "red", fontWeight: "bold" }}>SEEK SHELTER</p>}
      {isHighTemperatureWarning && <p style={{ color: "red" }}>Warning: High Temperature!</p>}
      {isHighWindSpeedWarning && <p style={{ color: "red" }}>Warning: High Wind Speed!</p>}
      {isLowTemperatureWarning && <p style={{ color: "blue" }}>Warning: Low Temperature!</p>}
      {isRainWarning && <p style={{ color: "orange" }}>Warning: Rain Expected!</p>}
      {/* You can display different weather details here based on your API response */}
    </div>
  );
};

export default WeatherCard;
