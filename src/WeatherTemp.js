import React from "react";

export default function WeatherTemp(props) {
  return (
    <div>
      <span className="weather">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>

        <span className="unit">°F</span>
      </span>
    </div>
  );
}
