import React from "react";
import pin from "./images/pin.svg";
import drone from "./images/drone.svg";
import map from "./images/Maps.svg";
import screenshot from "./images/screenshot.svg";
import add from "./images/Add.svg";
import sub from "./images/Subtract.svg";
import zoomout from "./images/ZoomOut.svg";
import leftbuttonlay from "./images/Button Play.svg";
import leftpause from "./images/Button Play Pause.svg";
import ranger from "./images/slideranger.svg";
import rightpause from "./images/Button Play Pause (1).svg";
import rightbuttonplay from "./images/Button Play (1).svg";
import sub1 from "./images/Subtract (1).svg";
import add1 from "./images/Add1.svg";
import onex from "./images/1x.svg";
import comp66 from "./images/Component66.svg";
import galleryview from "./images/GalleryView.svg";
import Fullscreen from "./images/Fullscreen.svg";
import leftarrow from "./images/left-arrow.svg";
import toparrow from "./images/top-arrow.svg";
import rightarrow from "./images/right-arrow.svg";
import bottomarrow from "./images/bottom-arrow.svg";
import Calendar from "./images/trailing-icon.svg";
import "./Video.css";

const Video = () => {
  return (
    <div id="main">
      <div className="iconsDiv">
        <div className="icons">
          <div>
            <img src={pin} alt="" />
          </div>
          <div>
            <img src={drone} alt="" style={{ background: "#FFF" }} />
          </div>
        </div>
        <div className="mapDiv">
          <img src={map} alt="" style={{ background: "#FFF" }} />
        </div>
      </div>
      <div>
        <div className="icon-block">
          <div className="icon-top">
            <img src={toparrow} alt="" style={{ background: "#FFF" }} />
          </div>
          <div className="icon-middle">
            <img src={leftarrow} alt="" style={{ background: "#FFF" }} />
            <img src={rightarrow} alt="" style={{ background: "#FFF" }} />
          </div>
          <div className="icon-top">
            <img src={bottomarrow} alt="" style={{ background: "#FFF" }} />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-1">
          <span>1:00 am</span>
          <span>2:00 am</span>
          <span>3:00 am</span>
          <span>4:00 am</span>
          <span>5:00 am</span>
          <span>6:00 am</span>
          <span>7:00 am</span>
          <span>8:00 am</span>
          <span>9:00 am</span>
        </div>
        <div className="bottom-2"></div>
        <div className="bottom-3">
          <div className="leftFooter">
            <div className="cam-img">
              <img src={screenshot} alt="" />
            </div>
            <div className="date-cal">
              <div className="date">
                <span>Date</span>
                <span>08/05/2023</span>
              </div>
              <div className="calend">
                <img src={Calendar} alt="" style={{ color: "#002641" }} />
              </div>
            </div>
            <div className="zoom-icons">
              <img src={sub} alt="" />
              <img src={zoomout} alt="" />
              <img src={add} alt="" />
            </div>
          </div>
          <div className="playButton">
            <img src={leftbuttonlay} alt="" />
            <img src={leftpause} alt="" />
            <div style={{ display: "flex", paddingTop:"0.6rem" }}>
  <img
    src={ranger}
    alt=""
    style={{ maxWidth: "100%", maxHeight: "100%", alignSelf: "center", margin: "0", padding: "0" }}
  />
</div>

            <img src={rightpause} alt="" />
            <img src={rightbuttonplay} alt="" />
          </div>

          <div className="rightFooter">
            <div className="zoom-icons">
              <img src={sub1} alt="" />
              <img src={add1} alt="" />
              <img src={onex} alt="" />
            </div>
            <div className="leftIcons">
              <img src={comp66} alt="" />
            </div>
            <div className="leftIcons">CC</div>
            <div className="leftIcons">
              <img src={galleryview} alt="" />
            </div>
            <div className="leftIcons">
              <img src={Fullscreen} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom-4">
          <span>Tylella Ave & Bayshore Fwy NB</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
