import './App.css';
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://wttr.in/?format=%C+%t+%w');
        const result = await response.text();

        console.log("Weather Data:", result);
        setWeatherData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h2>Weather Page</h2>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
