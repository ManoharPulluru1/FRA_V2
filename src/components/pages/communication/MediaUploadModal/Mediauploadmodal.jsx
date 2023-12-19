import React from 'react'
import "./mediauploadmodal.css"
import cloud from "./images/cloud.svg"
import Fileuploading from '../Fileuploading/Fileuploading'
const Mediauploadmodal = ({hideFileUpload}) => {
  return (
    <div className='Mediauploadcontainer'>
      <div className="modal">
        <div className="cloud-container">
            <div className="innercontainer">
                <img src={cloud} alt="upload_cloud" />
                <text>Uploaded!</text>
            </div>
        </div>
        <div className="medias">
          <div className="media-card">
          <Fileuploading/>
          </div>
          <div className="media-card">
          <Fileuploading/>
          </div>
          <div className="media-card">
          <Fileuploading/>
          </div>
        </div>
        
        <div className="actions">
            <button className="cancel" onClick={hideFileUpload}>Cancel</button>
            <button className="share">Done</button>
        </div>
      </div>
    </div>
  )
}

export default Mediauploadmodal
