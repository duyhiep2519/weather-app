import React from "react";
import umbrella from "../../Images/umbrella.svg";
const Header = () => {
  return (
    <div>
      <h2>
        <img style={{ width: "1.5rem" }} src={umbrella} alt="Weather logo" />{" "}
        Weather App{" "}
        <img style={{ width: "1.5rem" }} src={umbrella} alt="Weather logo" />
      </h2>
    </div>
  );
};
export default Header;
