import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";

export default function WeatherCall(props) {
  return (
    <div>
      <div className="city">
        <h2>{props.data.city}</h2>
      </div>
      <ul className="cityDescription">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="weather-icon">
            <img
              src={props.data.iconUrl}
              alt="Mostly-cloudy"
              className="float-left"
            />
          </span>
          <WeatherTemp
            celsius={props.data.temperature}
            city={props.data.city}
          />
        </div>
        <div className="col-6">
          <ul className="WeatherDescription">
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
