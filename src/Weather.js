import React, { useState } from "react";
import axios from "axios";
import WeatherCall from "./WeatherCall.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: Math.round(response.data.temperature.humidity),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      realFeel: Math.round(response.data.temperature.feels_like),
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
    });
  }
  function search() {
    const apiKey = "406035333ab93t5b036b8515eob03bf5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherCall data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
