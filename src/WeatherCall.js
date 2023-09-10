import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";

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
          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="weatherDescription">
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
