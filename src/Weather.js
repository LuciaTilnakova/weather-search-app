import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday, 18:00",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button type="Submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <h1>London</h1>
        <ul>
          <li>Last updated: {weatherData.date}, 12 August</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="weather"
            ></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul className="right-side-list">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `e5acee71cf900fe7535600e9cd0efeca`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
