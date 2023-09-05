import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherCall(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <ul className="cityDescription">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt="Mostly-cloudy"
            className="float-left"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="weatherDescription">
            <li>Real Feel: {props.data.realFeel} °C</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
