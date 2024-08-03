import "./Navbar.css";
import React from "react";
import image from "../../images/quran.png";
import lightImage from "../../images/light.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Brand">
        <svg></svg>
        <a href="/">
          <img className="Navbar-Image" src={image} alt="image" />
        </a>
        <div className="text">Noble Quran</div>
      </div>
      <div className="Navbar-theme">
        <label htmlFor="">
          <input type="checkbox" />
          <div>
            <img src={lightImage} alt="" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
