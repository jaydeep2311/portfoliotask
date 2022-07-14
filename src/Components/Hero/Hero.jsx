import React from "react";
import "./Hero.css";
import sample from "../../Images/sample.jpg";
import zigzag from "../../Images/zigzags.png";
import cube from "../../Images/cube.png";
import circles from "../../Images/circles.png";
import plus from "../../Images/plus.png";
const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 image order-1 order-md-2">
            <img src={zigzag} alt="" id="zigzag" />
            <img src={cube} alt="" id="cube" />
            <img src={circles} alt="" id="circles" />
            <img src={plus} alt="" id="plus" />
            <img src={sample} alt="" />
          </div>
          <div className="col-md-6 info order-2 order-md-1 ">
            <div className="profile">
              <h3 className="heading">John Doe</h3>

              <p className="content">
                Hello! Am a software developer and here is my portfolio website.
                Here you’ll learn about my journey as a software developer.
              </p>
              <button className="btn">Hire me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
