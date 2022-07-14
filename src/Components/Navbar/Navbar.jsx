import React from "react";
import "./Navbar.css";
import gears from "../../Images/setting.png";

const Navbar = () => {
  return (
    <nav class="navbar ">
      <div className="icon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt=""
        />
      </div>
      <div class="container">
        <div className="navbox">
          <div className="col-sm-5"></div>
          <div className="col-sm-7 nav-links">
            <a className="navbar-brand" href="#">
              Skills
            </a>
            <a className="navbar-brand" href="#">
              Projects
              <span>
                <img src={gears} alt="" className="gears" />
              </span>
            </a>
            <a className="navbar-brand" href="#">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
