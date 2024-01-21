// Modify WeatherCard.js

import React from "react";

const WeatherCard = ({ weatherData }) => {
  // Extract temperature from the weatherData (assuming temperature is the first part)
  const temperature = parseInt(weatherData.split(" ")[0]);

  // Extract wind speed from the weatherData (assuming wind speed is the third part)
  const windSpeed = parseInt(weatherData.split(" ")[2]);

  // Set thresholds for warnings (you can adjust these values)
  const highTemperatureThreshold = 30; // Example threshold in degrees Celsius
  const highWindSpeedThreshold = 40; // Example threshold in km/h
  const lowTemperatureThreshold = -10; // Example threshold in degrees Celsius

  // Determine if there are warnings
  const isHighTemperatureWarning = temperature > highTemperatureThreshold;
  const isHighWindSpeedWarning = windSpeed > highWindSpeedThreshold;
  const isLowTemperatureWarning = temperature < lowTemperatureThreshold;

  // Set color based on warnings
  const cardColor = isHighTemperatureWarning || isHighWindSpeedWarning || isLowTemperatureWarning
    ? "rgba(255, 0, 0, 0.2)"
    : "rgba(0, 0, 255, 0.2)";

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
      <h3>Weather Information</h3>
      <p>{weatherData}</p>
      {isHighTemperatureWarning && <p style={{ color: "red" }}>Warning: High Temperature!</p>}
      {isHighWindSpeedWarning && <p style={{ color: "red" }}>Warning: High Wind Speed!</p>}
      {isLowTemperatureWarning && <p style={{ color: "blue" }}>Warning: Low Temperature!</p>}
      {/* You can display different weather details here based on your API response */}
    </div>
  );
};

export default WeatherCard;
