import React from "react";
import FireWarning from '../images/Fire-Warning.svg'
import MapLogo from '../images/R1-map.svg'
import './informtable.css'

const InformTable = () => {

    return (
        <>
        <div className="R1">
            <div className="R1-left">
                <div className="img-block">
                    <img src={FireWarning} alt="Fire-Warning Logo" />
                </div>
                <div className="text-block">
                    <div className="first-text">
                        <text>FRW - Fire Warning</text>
                    </div>
                    <div className="second-text">
                        <text>High severity</text>
                    </div>
                </div>
            </div>
            <div className="R1-right">
                <img src={MapLogo} alt="Map-Logo" />
            </div>
        </div>
        <div className="R2">
            <div className="first-block">
                <div className="txt-block">
                    <div className="frst-col-txt">
                        <text >Location</text>
                    </div>
                    <div className="second-col-txt">
                        <text >124 Fulton St, New York, NY 10038</text>
                    </div>
                </div>
                <div className="txt-block">
                    <div className="frst-col-txt">
                        <text >Issuing authority</text>
                    </div>
                    <div className="second-col-txt">
                        <text >Off. Larry Jackson</text>
                    </div>
                </div>
                <div className="txt-block">
                    <div className="frst-col-txt">
                        <text >Certainty</text>
                    </div>
                    <div className="second-col-txt">
                        <text >Certain</text>
                    </div>
                </div>
                <div className="txt-block">
                    <div className="frst-col-txt">
                        <text >Description</text>
                    </div>
                    <div className="second-col-txt">
                        <text >A massive fire broke out due to mishaps in the kitchen in AB cafe</text>
                    </div>
                </div>
                <div className="txt-block">
                    <div className="frst-col-txt">
                        <text>Time</text>
                    </div>
                    <div className="second-col-txt">
                        <text >22:08:23</text>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
  
export default InformTable