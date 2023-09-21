import React from "react";

export default function WeatherDayForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function Day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{Day()} </div>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="weather-forecast-temperatures">
        <span className="forecast-temp-max">{maxTemp()}</span>{" "}
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
