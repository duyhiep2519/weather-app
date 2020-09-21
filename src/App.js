import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import GetWeather from "./Components/getWeather/getWeather";

const App = () => {
  return (
    <div className="App">
      <Header />
      <GetWeather />
    </div>
  );
};

export default App;
