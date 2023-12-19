import React from 'react'
import "./media.css"
const Media = ({src}) => {
  return (
    <div className='media-box'>
      <div className="image-box">
        <img src={src} alt="" />
      </div>
      <p>Rubin Residence Hall.jpeg</p>
    </div>
  )
}

export default Media
