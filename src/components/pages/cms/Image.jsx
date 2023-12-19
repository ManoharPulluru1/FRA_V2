import React from "react";
import "./img.css";

export default function Image({ image, share, pin }) {
  return (
    <div className="content-container">
      <img className="image-content" src={image} />
      <div id="pin_share_icon_container">
        <div className="pin_icon_conatiner">
          <img src={pin} alt="pin_image" />
        </div>
        <div className="share_icon_conatiner">
          <img src={share} alt="share_image" />
        </div>
      </div>
      <div className="file-name">sample_img.jpg</div>
    </div>
  );
}
