import React/*, { useState } */from 'react';
import "./cameras.css";
import street from "./images/street.svg";
import body from "./images/body.svg";
import surv from "./images/surv.svg";
import drone from "./images/drone.svg";
import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import img3 from "./images/img3.svg";
import img4 from "./images/img4.svg";
import img5 from "./images/img5.svg";
import img6 from "./images/img6.svg";
import img7 from "./images/img7.svg";
import img8 from "./images/img8.svg";
import img9 from "./images/img9.svg";
import pin from "./images/pin.svg";
import user from "./images/user.svg";

const Cameras = () => {
  return (
    <div className="camerasComponent">
      <div className="cam-v1">Cameras</div>
      <div className="cam-v2">
        <div className="cam_head">Cameras</div>
        <div className="cam_icons">
          <div className="cam_icon">
            <div className="cam_icon_text">All (37)</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_img_div">
              <img className="cam_icon_img" src={street} />
            </div>

            <div className="cam_icon_text">Street (9)</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_img_div">
              <img className="cam_icon_img" src={body} />
            </div>

            <div className="cam_icon_text">Body (20)</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_img_div">
              <img className="cam_icon_img" src={surv} />
            </div>

            <div className="cam_icon_text">Surveillance(6)</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_img_div">
              <img className="cam_icon_img" src={drone} />
            </div>

            <div className="cam_icon_text">Drone (2)</div>
          </div>
        </div>
      </div>
      <div className="cam-v3">
        <div className="area_head">Area</div>
        <div className="cam_icons">
          <div className="cam_icon">
            <div className="cam_icon_text">Wall Street</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">Canal Street</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">Bleecker Street</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">Houston Street</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">Doyers Street</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text"> Park Avenue</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">The Oculus</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10001</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10002</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10003</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10004</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10005</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10006</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10007</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10008</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10009</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10010</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10011</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10012</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10013</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10014</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10015</div>
          </div>
          <div className="cam_icon">
            <div className="cam_icon_text">10016</div>
          </div>
        </div>
      </div>
      <div className="cam-v4">
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={street} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>

          <img className="testImg" src={img2} />
          <div className="cam_img_text">Tylella Ave & Bayshore Fwy NB</div>
        </div>

        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={drone} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img3} />
          <div className="cam_img_text">20 Cooper Square</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={surv} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img4} />
          <div className="cam_img_text">4 Washington Pl</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={street} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img5} />
          <div className="cam_img_text">1 E 2nd St</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={street} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img6} />
          <div className="cam_img_text">246 Greene St</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={drone} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img7} />
          <div className="cam_img_text">80 Lafayette St</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={surv} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img8} />
          <div className="cam_img_text">101 Johnson St, Brooklyn</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={street} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img9} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={street} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
        <div className="cam_img_div">
          <div className="cid_1">
            <img className="cam_icon_img" src={body} />
          </div>
          <div className="cid_2">
            <img className="cam_icon_img" src={user} />
          </div>
          <div className="cid_3">
            <img className="cam_icon_img" src={pin} />
          </div>
          <img className="testImg" src={img1} />
          <div className="cam_img_text">Rubin Residence Hall</div>
        </div>
      </div>
    </div>
  );
};

export default Cameras;



// const Cameras = ({ onImageClick }) => {
//   const img1 = {img1};
//   const img2 = {img2};
//   const img3 = {img3};
//   const handleImageClick = (image) => {
//     onImageClick(image);
//   };
//   return (
//     <div className="camerasComponent">
//       <div className="cam-v1">Cameras</div>
//       <div className="cam-v2">
//         <div className="cam_head">Cameras</div>
//         <div className="cam_icons">
//           <div className="cam_icon">
//             <div className="cam_icon_text">All (37)</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_img_div">
//               <img className="cam_icon_img" src={street} />
//             </div>

//             <div className="cam_icon_text">Street (9)</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_img_div">
//               <img className="cam_icon_img" src={body} />
//             </div>

//             <div className="cam_icon_text">Body (20)</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_img_div">
//               <img className="cam_icon_img" src={surv} />
//             </div>

//             <div className="cam_icon_text">Surveillance(6)</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_img_div">
//               <img className="cam_icon_img" src={drone} />
//             </div>

//             <div className="cam_icon_text">Drone (2)</div>
//           </div>
//         </div>
//       </div>
//       <div className="cam-v3">
//         <div className="area_head">Area</div>
//         <div className="cam_icons">
//           <div className="cam_icon">
//             <div className="cam_icon_text">Wall Street</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">Canal Street</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">Bleecker Street</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">Houston Street</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">Doyers Street</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text"> Park Avenue</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">The Oculus</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10001</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10002</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10003</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10004</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10005</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10006</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10007</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10008</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10009</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10010</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10011</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10012</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10013</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10014</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10015</div>
//           </div>
//           <div className="cam_icon">
//             <div className="cam_icon_text">10016</div>
//           </div>
//         </div>
//       </div>
//       <div className="cam-v4">
//         <div className="cam_img_div" key={index} onClick={() => handleImageClick(img1)}>
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img src={imagePath} alt={`Image ${index + 1}`} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={street} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>

//           <img className="testImg" src={img2} />
//           <div className="cam_img_text">Tylella Ave & Bayshore Fwy NB</div>
//         </div>

//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={drone} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img3} />
//           <div className="cam_img_text">20 Cooper Square</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={surv} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img4} />
//           <div className="cam_img_text">4 Washington Pl</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={street} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img5} />
//           <div className="cam_img_text">1 E 2nd St</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={street} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img6} />
//           <div className="cam_img_text">246 Greene St</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={drone} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img7} />
//           <div className="cam_img_text">80 Lafayette St</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={surv} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img8} />
//           <div className="cam_img_text">101 Johnson St, Brooklyn</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={street} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img9} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={street} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//         <div className="cam_img_div">
//           <div className="cid_1">
//             <img className="cam_icon_img" src={body} />
//           </div>
//           <div className="cid_2">
//             <img className="cam_icon_img" src={user} />
//           </div>
//           <div className="cid_3">
//             <img className="cam_icon_img" src={pin} />
//           </div>
//           <img className="testImg" src={img1} />
//           <div className="cam_img_text">Rubin Residence Hall</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cameras;

