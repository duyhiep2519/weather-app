//get weather icon
const getWeatherIcon = (id) => {
  switch (true) {
    case id >= 200 && id < 232:
      return "wi wi-thunderstorm";

    case id >= 300 && id <= 321:
      return "wi wi-sleet";

    case id >= 500 && id <= 521:
      return "wi wi-storm-showers";

    case id >= 600 && id <= 622:
      return "wi wi-snow";

    case id >= 701 && id <= 781:
      return "wi wi-fog";

    case id === 800:
      return "wi wi-day-sunny";

    case id >= 801 && id <= 804:
      return "wi wi-day-fog";
    default: 
     return 'wi wi-day-fog'
  }
};
export default getWeatherIcon;
