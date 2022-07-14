import React from "react";
import "./Footer.css";
import social from "../../Images/socialmedia.png";
import github from "../../Images/github.png";

const Footer = () => {
  return (
    <div>
      <div className="back-wave">
        <div className="container">
          <div className="row">
            <div className="col-md-6 social">
              <div className="social-heading">My social media links:</div>
              <div className="social-links">
                <img src={social} alt="" className="social-img" />
              </div>
            </div>
            <div className="col-md-6 social">
              <div className="social-heading">where to get my code</div>
              <div className="social-links">
                <img src={github} alt="" className="social-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
