import React from "react";
import "./sharemodal.css";
import share from "./share.svg";
import cancel_button from "./cancel_button.svg";
import share_image from "./share_image.png";
import facebook from "./facebook.jpg";
import instagram from "./instagram.jpg";
import whatsapp from "./whatsapp.jpg";
import x from "./x.jpg";

function Sharemodal({ closeModal }) {
  return (
    <>
      <div className="back-ground-dark" />
      <div className="modal-body">
        <div className="modal-content">
          <div className="share-cancel-bar">
            <div>
              <img src={share} alt="share_icon" />
              <p>Share</p>
            </div>
            <div>
              <img
                src={cancel_button}
                alt="cancel_button"
                onClick={closeModal}
              />
            </div>
          </div>
          <div id="share_image">
            <img src={share_image} alt="share_image" />
          </div>
          <div className="platform_selection">
            <div className="selection">
              <div>
                <input type="checkbox" />
                <label>All</label>
              </div>

              <div>
                <input type="checkbox" />
                <label>Civilain</label>
              </div>

              <div>
                <input type="checkbox" />
                <label>FR</label>
              </div>
            </div>

            <p>Other Platforms</p>
            <div className="social-media">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={whatsapp} alt="whatsapp" />
             <img src={x} alt="x" />
            </div>
            <div className="button-container">
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sharemodal;
