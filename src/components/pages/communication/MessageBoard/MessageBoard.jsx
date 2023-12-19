import React, { useRef, useState } from "react";
import "./messageboard.css";
import close from "../images/close.svg";
import media from "../images/media.svg";
import mice from "../images/mice.svg";
import Message from "../../../communication/MessageBox/Message";
import Tag from "../../../communication/Tag/Tag";
import InsightModal from "../Insightuploadmoda/InsightModal";
import Mediauploadmodal from "../MediaUploadModal/Mediauploadmodal";
const MessageBoard = ({hideMessageBoard}) => {
  let [activeFirstResponderChat, setactiveFirstResponderChat] = useState(true);
  let [activeCivilianceChat, setactiveactiveCivilianceChat] = useState(false);
  let [showMediaUpload, setshowMediaUpload] = useState(false);
  let [showfilesUpload,setshowfilesUpload]=useState(false)
  let FirstResponderChatScroll = useRef(null);
  let chatInputContainer=useRef()
  function FirstResponderChat() {
    setactiveFirstResponderChat(true);
    setactiveactiveCivilianceChat(false);

    FirstResponderChatScroll.current.scrollTop = FirstResponderChatScroll.current.scrollHeight
  }
  function CivilianceChat() {
    setactiveFirstResponderChat(false);
    setactiveactiveCivilianceChat(true);
  }


  function toggleMediaUploadModal(){
    setshowMediaUpload(showMediaUpload=>!showMediaUpload)
  }

  function showFileUpload(){
    setshowfilesUpload(true)
    setshowMediaUpload(false)
  }
  function hideFileUpload(){
    setshowfilesUpload(false)
    setshowMediaUpload(true)
  }
  return (
    <>
    <div className="message_board">
      <div className="top-section">
        <div className="inside-container">
          <div className="top">
            <text>Message Board</text>
            <img src={close} alt="close"  onClick={hideMessageBoard}/>
          </div>
          <div className="bottom">
            <text
              onClick={FirstResponderChat}
              id={activeFirstResponderChat ? "active" : ""}
            >
              First Responders
            </text>
            <text
              onClick={CivilianceChat}
              id={activeCivilianceChat ? "active" : ""}
            >
              Civilians
            </text>
          </div>
        </div>
      </div>
      {/* <div className="ContainerformessageBoxes"></div> */}
      {activeFirstResponderChat ? (
        <div className="message-container" ref={FirstResponderChatScroll}>
          <Message isReciever={false} />
          <Message isReciever={true} images={true} />
          <Message isReciever={true} />
          <Message isReciever={false} />
          <Message isReciever={true} />
          <Message isReciever={true} />
        </div>
      ) : (
        <div className="message-container">
          <Message isReciever={false} />
          <Message isReciever={false} />
          <Message isReciever={true} />
          <Message isReciever={false} />
          <Message isReciever={true} />
          <Message isReciever={true} />
        </div>
      )}
      <div className="input-container" ref={chatInputContainer}>
        <div className="top">
          <div className="left">
            <div className="to">
              <text>To:</text>
              {/* <Tag title="Police" />
              <Tag title="Paramedics" /> */}
            </div>
            <div className="tags">
              <Tag title="Police" />
              <Tag title="Paramedics" />
              <Tag title="Firemen" />
            </div>
          </div>
          <div className="right">
            <button id="go-live">Go live</button>
          </div>
        </div>

        <div className="bottom">
          <div className="media" onClick={toggleMediaUploadModal}>
            <img src={media} alt="media" />
          </div>
          <div className="textarea">
            <textarea
              placeholder="Message @ID-NYPD 132"
              onInput={(e) => {
                console.log(e.target.scrollHeight);
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
                // chatInputContainer.current.style.height = "18.33%";
                // chatInputContainer.current.style.height = chatInputContainer.target.scrollHeight + "px";
                
              }}
            ></textarea>
          </div>
          <div className="mice">
            <img src={mice} alt="mice" />
          </div>
        </div>
      </div>
    </div>
     { showMediaUpload && <InsightModal showFileUpload={showFileUpload} toggleMediaUploadModal={toggleMediaUploadModal}/>}
     {showfilesUpload && <Mediauploadmodal hideFileUpload={hideFileUpload}/>}
      </>
  );
};

export default MessageBoard;
