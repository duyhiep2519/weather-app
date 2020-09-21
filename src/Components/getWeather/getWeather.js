import React, { useState } from "react";
import axios from "axios";
import getWeatherIcon from "../../Helper";
import "./getWeather.css";
import ShowCurrentWeather from "./showCurrentWeather";
import ShowWeather from "./showWeather";
import "weather-icons/css/weather-icons.css";

const GetWeather = () => {
  // weather of 5day
  const [weather, setWeather] = useState({
    list: undefined,
    city: undefined,
    country: undefined,
  });
  // current weather
  const [current_weather, setCurrent_weather] = useState({
    city: "",
    country: "",
    date: undefined,
    main: undefined,
    wind: undefined,
    weather: undefined,
    icon: undefined,
  });
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("");

  // get current weather
  const currentWeather = () => {
    axios({
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a72e305412mshdf599b7bef77491p10a48cjsn2f15bf96dcf0",
        useQueryString: true,
      },
      params: {
        units: unit,
        q: city,
      },
    })
      .then((response) => {
        setCurrent_weather({
          city: response.data.name,
          country: response.data.sys.country,
          date: response.data.dt,
          main: response.data.main,
          wind: response.data.wind,
          weather: response.data.weather,
          icon: getWeatherIcon(response.data.weather[0].id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get weather
  const getWeather = () => {
    axios({
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a72e305412mshdf599b7bef77491p10a48cjsn2f15bf96dcf0",
        useQueryString: true,
      },
      params: {
        units: unit,
        q: city,
      },
    })
      .then((response) => {
        setWeather({
          city: response.data.city.name,
          country: response.data.city.country,
          list: response.data.list,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentWeather();
    getWeather();
    setCity("");
    setUnit("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form_get-search">
          <input
            placeholder="Search any location....."
            className="search_city"
            name="city"
            type="text"
            id="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />{" "}
          <button type="submit" className="button_search">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div>
          {" "}
          <label htmlFor="C">
            {" "}
            <input
              className="radio_input"
              value={"metric"}
              id="C"
              type="radio"
              name="unit"
              checked={unit === "metric"}
              onChange={(e) => setUnit(e.target.value)}
            ></input>{" "}
            <i style={{fontSize:"1.3rem"}} className="wi wi-celsius" />
          </label>
          <label htmlFor="F">
            {" "}
            <input
              className="radio_input"
              value={"imperial"}
              id="F"
              type="radio"
              name="unit"
              checked={unit === "imperial"}
              onChange={(e) => setUnit(e.target.value)}
            ></input>
            <i style={{fontSize:"1.3rem"}} className="wi wi-fahrenheit" />
          </label>
        </div>
      </form>
      {weather && current_weather ? (
        <div className="container">
          <ShowCurrentWeather info={current_weather} />
          <ShowWeather weather={weather} />
        </div>
      ) : null}
    </div>
  );
};
export default GetWeather;
