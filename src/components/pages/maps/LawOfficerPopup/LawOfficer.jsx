import React from "react";
import cross from '../images/cross.svg';
import group from '../images/Group.svg';
import camera from '../images/camera.svg';
import handcuff from '../images/handcuff.svg';
import instrument from '../images/instrument.svg';
import gun from '../images/gun.svg';
import stick from '../images/stick.svg';
import './lawofficer.css'

const LawOfficer = () => {

    return (
        <div className="main-div">
            <div className="lawofficerCard">

                <div className="R3">
                    <div className="officer-sec">
                    
                        <div className="box">
                            <div className="box-left">
                                <div className="upper">
                                    <div className="officer-info">
                                        <span className="officer-name">Off. Braddy Sean</span>
                                        <span className="officer-id">ID - NYPD 232</span>
                                    </div>
                                    <div className="distance">
                                        <span className="distance-txt">3 min away</span>
                                    </div>
                                </div>
                                <div className="lower">
                                    <div className="img-block bg-1">
                                        <img src={group} alt="" />
                                    </div>

                                    <div className="img-block bg-1 img-2">
                                        <img src={camera} alt="" />
                                    </div>

                                    <span className="gap"></span>

                                    <div className="line"></div>

                                    <span className="gap"></span>

                                    <div className="img-block bg-2">
                                        <img src={handcuff} alt="" />
                                    </div>

                                    <div className="img-block bg-3">
                                        <img src={instrument} alt="" />
                                    </div>

                                    <div className="img-block bg-4">
                                        <img src={gun} alt="" />
                                    </div>

                                    <div className="img-block bg-5">
                                        <img src={stick} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="box-right">
                                <img src={cross} alt="cross" onClick={() => handleDeleteBox(boxIndex - 1)} />
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-left">
                                <div className="upper">
                                    <div className="officer-info">
                                        <span className="officer-name">Off. Lara Sen</span>
                                        <span className="officer-id">ID - NYPD 255</span>
                                    </div>
                                    <div className="distance">
                                        <span className="distance-txt">3 min away</span>
                                    </div>
                                </div>
                                <div className="lower">
                                    <div className="img-block bg-1">
                                        <img src={group} alt="" />
                                    </div>

                                    <div className="img-block bg-1 img-2">
                                        <img src={camera} alt="" />
                                    </div>

                                    <span className="gap"></span>

                                    <div className="line"></div>

                                    <span className="gap"></span>

                                    <div className="img-block bg-2">
                                        <img src={handcuff} alt="" />
                                    </div>

                                    <div className="img-block bg-3">
                                        <img src={instrument} alt="" />
                                    </div>

                                    <div className="img-block bg-4">
                                        <img src={gun} alt="" />
                                    </div>

                                    <div className="img-block bg-5">
                                        <img src={stick} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="box-right">
                                <img src={cross} alt="cross" />
                            </div>
                        </div>
                        

                        <div className="box">
                            <div className="box-left">
                                <div className="upper">
                                    <div className="officer-info">
                                        <span className="officer-name">Off. Thara</span>
                                        <span className="officer-id">ID - NYPD 235</span>
                                    </div>
                                    <div className="distance">
                                        <span className="distance-txt">3 min away</span>
                                    </div>
                                </div>
                                <div className="lower">
                                    <div className="img-block bg-1">
                                        <img src={group} alt="" />
                                    </div>

                                    <div className="img-block bg-1 img-2">
                                        <img src={camera} alt="" />
                                    </div>

                                    <span className="gap"></span>

                                    <div className="line"></div>

                                    <span className="gap"></span>

                                    <div className="img-block bg-2">
                                        <img src={handcuff} alt="" />
                                    </div>

                                    <div className="img-block bg-3">
                                        <img src={instrument} alt="" />
                                    </div>

                                    <div className="img-block bg-4">
                                        <img src={gun} alt="" />
                                    </div>

                                    <div className="img-block bg-5">
                                        <img src={stick} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="box-right">
                                <img src={cross} alt="cross" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-left">
                                <div className="upper">
                                    <div className="officer-info">
                                        <span className="officer-name">Off. Jackson</span>
                                        <span className="officer-id">ID - NYPD 215</span>
                                    </div>
                                    <div className="distance">
                                        <span className="distance-txt">3 min away</span>
                                    </div>
                                </div>
                                <div className="lower">
                                    <div className="img-block bg-1">
                                        <img src={group} alt="" />
                                    </div>

                                    <div className="img-block bg-1 img-2">
                                        <img src={camera} alt="" />
                                    </div>

                                    <span className="gap"></span>

                                    <div className="line"></div>

                                    <span className="gap"></span>

                                    <div className="img-block bg-2">
                                        <img src={handcuff} alt="" />
                                    </div>

                                    <div className="img-block bg-3">
                                        <img src={instrument} alt="" />
                                    </div>

                                    <div className="img-block bg-4">
                                        <img src={gun} alt="" />
                                    </div>

                                    <div className="img-block bg-5">
                                        <img src={stick} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="box-right">
                                <img src={cross} alt="cross" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-left">
                                <div className="upper">
                                    <div className="officer-info">
                                        <span className="officer-name">Off. Jackson</span>
                                        <span className="officer-id">ID - NYPD 215</span>
                                    </div>
                                    <div className="distance">
                                        <span className="distance-txt">3 min away</span>
                                    </div>
                                </div>
                                <div className="lower">
                                    <div className="img-block bg-1">
                                        <img src={group} alt="" />
                                    </div>

                                    <div className="img-block bg-1 img-2">
                                        <img src={camera} alt="" />
                                    </div>

                                    <span className="gap"></span>

                                    <div className="line"></div>

                                    <span className="gap"></span>

                                    <div className="img-block bg-2">
                                        <img src={handcuff} alt="" />
                                    </div>

                                    <div className="img-block bg-3">
                                        <img src={instrument} alt="" />
                                    </div>

                                    <div className="img-block bg-4">
                                        <img src={gun} alt="" />
                                    </div>

                                    <div className="img-block bg-5">
                                        <img src={stick} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="box-right">
                                <img src={cross} alt="cross" />
                            </div>
                        </div>

                    </div>

                    <div className="button-sec">
                        <button>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default LawOfficer