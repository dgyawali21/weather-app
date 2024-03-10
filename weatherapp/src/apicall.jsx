import React from "react";

const API_KEY = "f2ae868c91482121186cf3be6f9e70ac";

export async function fetchWeatherData(zipCode) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
