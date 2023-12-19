import React from "react";
import "./message.css";
import avatar from "./images/avatar.svg";
import media1 from "./images/Rectangle 34626156 (2).svg";
import media2 from "./images/Rectangle 34626156 (1).svg";
import media3 from "./images/Rectangle 34626156.svg";
const Message = ({ isReciever ,images }) => {
  return (
    <div className={`message-box ${isReciever ? "reciever" : "sender"}`}>
      <div
        className={`${isReciever ? "reciever-left-border" : "left-border"}`}
      ></div>
      <div className="message-info">
        <div className="responder">
          <text className="responder-name">Officer Schen Ro</text>
          <text className="time">2 min</text>
        </div>
        <div className="department">
          <img src={avatar} alt="officer" />
          <text>Fire fighter - ID-NYPD 032</text>
        </div>
        <p className={`${isReciever ? "reciever-para" : ""}`}>
          We've got multiple casualties outside the building. We need medical
          assistance ASAP.
        </p>
      { images && <div
          className={`imagesContainer ${
            isReciever ? "reciverimagesContainer" : ""
          }`}
        >
          <div className="image">
            <img
              src={media1}
              alt="media"
            />
          </div>
          <div className="image">
            <img src={media2} alt="media" />
          </div>
          <div className="image">
            <img src={media3} alt="media" />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Message;
