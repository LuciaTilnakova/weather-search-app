import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import "axios";

export default function WeatherForecast(props) {
  function handleSubmit(response) {
    console.log(response);
  }
  console.log(props);
  let apiKey = `e5acee71cf900fe7535600e9cd0efeca`;
  let latitude = props.data.coords.lat;
  let longitude = props.data.coords.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleSubmit);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col text-center">
          Thu
          <div className="icon">
            <img src={props.data.icon} alt="weather" width="60px"></img>
          </div>
          <span className="WeatherForecast-temp-max">19°</span>
          <span className="WeatherForecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
