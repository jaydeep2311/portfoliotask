import React from "react";
import "./Contact.css";
import man from "../../Images/man.png";
import send from "../../Images/send.png";

const Contact = () => {
  return (
    <div>
      <div className="contact-heading">Contact me</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={man} alt="" className="man" />
          </div>
          <div className="col-lg-6 ">
            <div className="input-boxes">
              <input
                type="text"
                className="email-box"
                placeholder="Enter email address"
              />
              <input
                type="text"
                className="message-box"
                placeholder="Enter a message"
              />
              <button className="send">
                Send
                <span>
                  <img src={send} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
