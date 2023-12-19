import React from 'react'
import "./insightmodal.css"
import upload from "./images/upload.svg"
import img from "./images/image 61.svg"
import img2 from "./images/image 61 (13).svg"
import img3 from "./images/image 61 (1).svg"
import img4 from "./images/image 61 (2).svg"
import img5 from "./images/image 61 (3).svg"
import img6 from "./images/image 61 (4).svg"
import img7 from "./images/image 61 (5).svg"
import img8 from "./images/image 61 (6).svg"
import img9 from "./images/image 61 (7).svg"
import img10 from "./images/image 61 (8).svg"
import img11 from "./images/image 61 (9).svg"
import img12 from "./images/image 61 (10).svg"
import img13 from "./images/image 61 (11).svg"
import img14 from "./images/image 61 (12).svg"
import img15 from "./images/image 61 (13).svg"
import Media from '../media/Media'
const InsightModal = ({toggleMediaUploadModal,showFileUpload}) => {
  return (
    <div className='modal-container'>
      <div className="modal">
        <div className="top-section-modal">
          <text>Real time content insights</text>
          <button id='upload' onClick={showFileUpload}><img src={upload} alt="upload"/>Upload</button>
        </div>
        <div className="media-container">
          <Media src={img}/>
          <Media src={img3}/>
          <Media src={img4}/>
          <Media src={img5}/>
          <Media src={img6}/>
          <Media src={img7}/>
          <Media src={img8}/>
          <Media src={img9}/>
          <Media src={img10}/>
          <Media src={img11}/>
          <Media src={img12}/>
          <Media src={img13}/>
          <Media src={img8}/>
          <Media src={img14}/>
          <Media src={img15}/>
          <Media src={img8}/>
          <Media src={img}/>
          <Media src={img2}/>
        </div>
        <div className="actions">
          <button className="cancel" onClick={toggleMediaUploadModal}>Cancel</button>
          <button className="share">Share</button>
        </div>
      </div>
    </div>
  )
}

export default InsightModal
