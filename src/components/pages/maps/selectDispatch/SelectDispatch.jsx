import React from "react";
import './selectdispatch.css';
import filter from '../images/filter.svg'
import vector from '../images/Vector.svg'

const SelectDispatch = () => {

    return (
        <div className="SecondBlock">
            <div className="dispatch">
                <span>Dispatch</span>
                <img src={filter} alt="filter" />
            </div>
            <div className="selectBoxes">
                <div className="checkbox-sec">
                    <input type="checkbox" />
                </div>
                <div className="txt-sec">
                    <span>Emergency Medical Services</span>
                    <span className="space"></span>
                    <span>(24)</span>
                </div>
                <div className="img-sec">
                    <img src={vector} alt="vector" />
                </div>
            </div>

            <div className="selectBoxes">
                <div className="checkbox-sec">
                    <input type="checkbox" />
                </div>
                <div className="txt-sec">
                    <span>Fire Services</span>
                    <span className="space"></span>
                    <span>(45)</span>
                </div>
                <div className="img-sec">
                    <img src={vector} alt="vector" />
                </div>
            </div>

            <div className="selectBoxes">
                <div className="checkbox-sec">
                    <input type="checkbox" />
                </div>
                <div className="txt-sec">
                    <span>Law Enforcement</span>
                    <span className="space"></span>
                    <span>(26)</span>
                </div>
                <div className="img-sec">
                    <img src={vector} alt="vector" />
                </div>
            </div>

            <div className="selectBoxes">
                <div className="checkbox-sec">
                    <input type="checkbox" />
                </div>
                <div className="txt-sec">
                    <span>Search and Rescue</span>
                    <span className="space"></span>
                    <span>(16)</span>
                </div>
                <div className="img-sec">
                    <img src={vector} alt="vector" /> 
                </div>
            </div>
            
        </div>
    )
}
  
export default SelectDispatch