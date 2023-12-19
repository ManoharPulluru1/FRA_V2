import React from "react";
import "./insights.css";
import sort from "./images/sort.svg";
import add from "./images/add.svg";
import image1 from "./images/image61.jpg";
import image2 from "./images/image62.jpg";
import image3 from "./images/image63.png";
import image4 from "./images/image64.png";
import pin_icon from "./images/pin.jpg";
import share_icon from "./images/share.jpg";
import Image from "./Image";

function Realtimeinsights() {
  return (
    <>
      <div className="section1">
        <h3>Real Time Content Insights</h3>

        <div className="section1-child2">
          <div>
            <p>Floor plans</p>
          </div>
          <div>
            <p>Procedures</p>
          </div>
          <div>
            <p>JPG</p>
          </div>
          <div>
            <p>PDF</p>
          </div>
          <div>
            <p>Building blueprints</p>
          </div>
          <div>
            <p>More</p>
          </div>

          <img className="sort-logo" alt="sort logo" src={sort} />

          <img className="add-logo" alt="add logo" src={add} />
        </div>
      </div>

      <div className="section2">
        <div className="section2-date1">
          <h3>22 November 2023</h3>
          <div className="section2-child">
            <Image image={image1} pin={pin_icon} share={share_icon} />
            <Image image={image2} pin={pin_icon} share={share_icon} />
            <Image image={image3} pin={pin_icon} share={share_icon} />
            <Image image={image4} pin={pin_icon} share={share_icon} />
            <Image image={image1} pin={pin_icon} share={share_icon} />
            <Image image={image2} pin={pin_icon} share={share_icon} />
            <Image image={image3} pin={pin_icon} share={share_icon} />
            <Image image={image4} pin={pin_icon} share={share_icon} />
          </div>
        </div>
        <div className="section2-date2">
          <h3>23 November 2023</h3>
          <div className="section2-child">
            <Image image={image1} pin={pin_icon} share={share_icon} />
            <Image image={image2} pin={pin_icon} share={share_icon} />
            <Image image={image3} pin={pin_icon} share={share_icon} />
            <Image image={image4} pin={pin_icon} share={share_icon} />
            <Image image={image1} pin={pin_icon} share={share_icon} />
            <Image image={image2} pin={pin_icon} share={share_icon} />
            <Image image={image3} pin={pin_icon} share={share_icon} />
            <Image image={image4} pin={pin_icon} share={share_icon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Realtimeinsights;
