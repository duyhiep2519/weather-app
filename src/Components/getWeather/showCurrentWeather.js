import React from "react";
import "weather-icons/css/weather-icons.css";

const ShowCurrentWeather = (props) => {
  const { info } = props;

  return (
    <div className="show_currentWeather">
      {info.weather ? (
        <div>
          <h4>
            {info.city}, {info.country}
          </h4>
          <h4>
            <i className={info.icon} />
            {info.weather[0].description.charAt(0).toUpperCase() +
              info.weather[0].description.slice(1)}{" "}
          </h4>
          <p>
            <i className="wi wi-strong-wind" /> Wind speed {info.wind.speed}m/s{" "}
          </p>
          <p>
            <i className="wi wi-humidity" /> Humidity : {info.main.humidity}%
          </p>
          <p>
            {" "}
            <i className="wi wi-thermometer"></i>
            {Math.round(info.main.temp * 10) / 10}&deg;
          </p>
          <div className="min_max-temp">
            <p>
              <i className="wi wi-thermometer-exterior"></i>Temperature max:{" "}
              {Math.round(info.main.temp_max * 10) / 10}&deg;
            </p>
            <p>
              <i className="wi wi-thermometer-exterior"></i> Temperature min:{" "}
              {Math.round(info.main.temp_max * 10) / 10}&deg;
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ShowCurrentWeather;
