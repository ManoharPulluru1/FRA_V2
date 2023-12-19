import React from 'react'
import "./fileuploading.css"
import pdf from "./images/pdf.svg"
import close from "./images/Frame.svg"
import add from "./images/add.svg"
const Fileuploading = () => {
  return (
    <div className='fileuploading-container'>
      <div className="filename">
        <div className="left">
            <img className='pdf' src={pdf} alt="pdf"/>
            <text>Lagayette.pdf</text>
        </div>
        <img src={close} alt="close" />
      </div>
      <div className="suggestedtags">
        <div className="top">
            <img src={add} alt="add" />
            <text>Add tags</text>
        </div>
        <div className="bottom">
            <text className='title'>Suggested tags</text>
            <div className="tag"><text>Floor plans</text></div>
            <div className="tag"><text>jpeg</text></div>
            <div className="tag"><text>building</text></div>
            <div className="tag"><text>seven floors</text></div>
            
        </div>
      </div>
    </div>
  )
}

export default Fileuploading
