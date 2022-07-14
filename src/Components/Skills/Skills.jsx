import React from "react";
import "./Skills.css";
import html from "../../Images/html5.png";
import css from "../../Images/css3.png";
import js from "../../Images/js.png";
import bootstrap from "../../Images/bootstrap.png";
import humanImage from "../../Images/humanImage.png";

const Skills = () => {
  return (
    <div>
      <div className="main-heading">Skills</div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 skill-section order-2 order-md-1 ">
            <h3 className="skill-heading">
              I have a vast experience in the following web technologies:
            </h3>
            <div className="skill-grid">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
              <img src={bootstrap} alt="" />
            </div>
          </div>
          <div className="col-md-5  order-1 order-md-2">
            <img src={humanImage} alt="" className="humanImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
