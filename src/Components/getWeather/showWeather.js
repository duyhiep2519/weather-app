import React from "react";
import "./getWeather.css";
import "weather-icons/css/weather-icons.css";
import getWeather from "../../Helper";
const ShowWeather = (props) => {
  const { weather } = props;

  //get day in week
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDayOfWeek = (number) => {
    switch (number) {
      case 0:
        return dayOfWeek[0];
      case 1:
        return dayOfWeek[1];
      case 2:
        return dayOfWeek[2];
      case 3:
        return dayOfWeek[3];
      case 4:
        return dayOfWeek[4];
      case 5:
        return dayOfWeek[5];
      case 6:
        return dayOfWeek[6];
      default:
        break;
    }
  };

  const getTime = (hour, minute) => {
    if (hour < 10) {
      if (minute < 10) {
        return `0${hour}:0${minute}`;
      } else {
        return `0${hour}:${minute}`;
      }
    } else {
      if (minute < 10) {
        return `${hour}:0${minute}`;
      } else {
        return `${hour}:${minute}`;
      }
    }
  };

  return (
    <div className="show_weather">
      {weather.list ? (
        <div className="table">
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Des</th>
                <th>Temp</th>
                <th>Wind </th>
                <th>Humidity</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="6">
                  <div className="scroll">
                    <table>
                      <tbody>
                        {" "}
                        {weather.list.map((info, key) => (
                          <tr key={key}>
                            <td>
                              {" "}
                              {getDayOfWeek(new Date(info.dt_txt).getDay())}
                            </td>
                            <td>
                              {getTime(
                                new Date(info.dt_txt).getHours(),
                                new Date(info.dt_txt).getHours()
                              )}
                            </td>
                            <td>
                              {info.weather[0].description
                                .charAt(0)
                                .toUpperCase() +
                                info.weather[0].description.slice(1)}{" "}
                              <i className={getWeather(info.weather[0].id)} />
                            </td>
                            <td style={{ padding: "0.5rem" }}>
                              {" "}
                              {info.main.temp}&deg;{" "}
                            </td>
                            <td style={{ padding: "0.6rem" }}>
                              {" "}
                              {info.wind.speed} m/s <i className="wi wi-strong-wind"/>
                            </td>
                            <td style={{ padding: "0.8rem" }}>
                              {info.main.humidity}%{" "}
                              <i className="wi wi-raindrop" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
export default ShowWeather;
