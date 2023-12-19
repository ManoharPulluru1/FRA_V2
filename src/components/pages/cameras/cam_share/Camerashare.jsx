import React, { useState } from "react";
import "./camerashare.css";
import pin from "./pin.svg";
import share from "./share.svg";
import map from "./Maps.svg";
import Sharemodal from "./Sharemodal";

const Camerashare = () => {
  let [show, setShow] = useState(false);

  return (
    <div className="camera-body">
      <div id="icon-container">
        <div id="pin-share-container">
          <div className="container">
            <img src={pin} />
          </div>

          <div className="container">
            <img
              src={share}
              onClick={() => {
                setShow(true);
              }}
            />
          </div>
        </div>

        <div className="container">
          <img src={map} />
        </div>
      </div>

      {show && (
        <Sharemodal
          closeModal={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

export default Camerashare;
