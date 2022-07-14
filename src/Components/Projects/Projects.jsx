import React from "react";
import "./Projects.css";
import challenge1 from "../../Images/challenge.png";
import gears from "../../Images/setting.png";

const Projects = () => {
  return (
    <div>
      <div className="main-heading">
        Projects
        <span>
          <img src={gears} alt="" className="gears" />
        </span>
      </div>
      <div className="container">
        <h3 className="project-heading">Some of my projects include:</h3>
        <div className="row">
          <div className="col-md-4">
            <img src={challenge1} alt="" className="challenge" />
          </div>
          <div className="col-md-4">
            <img src={challenge1} alt="" className="challenge" />
          </div>
          <div className="col-md-4">
            <img src={challenge1} alt="" className="challenge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
