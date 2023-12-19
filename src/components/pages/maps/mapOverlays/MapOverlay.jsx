import React, { useState } from "react";
import layer from "../images/mapOverlayLayers.svg";
import cross from "../images/cross.svg";
import search from "../images/search.svg";
import filter from "../images/filter.svg";
import handcuffs from "../images/handcuffs.svg";
import './mapoverlay.css';

const MapOverlay = () => {

    const [showAssets, setShowAssets] = useState(false);

    const handleAssetsClick = () => {
        setShowAssets(!showAssets);
    };


    return (
           <div className="mapOverlayCard">

                <div className="title">
                    <div className="title-left">
                        <img src={layer} alt="layer" />
                        <span className="overlay-txt">Map Overlays</span>
                        <span className="count">(7)</span>
                    </div>
                    <div className="title-right">
                        <img src={cross} alt="cross" />
                    </div>
                </div>

                <div className="searchbar">
                    <img src={search} alt="search" />
                    <input  type="text" placeholder="Search"/>
                </div>

                <div className="Filter-content">

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Incident</span>
                                <span className="txt-2">(15)</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Law Enforcement</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Fire Services</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Search and Rescue</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">EMS</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block" onClick={handleAssetsClick}>
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Assets</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        {showAssets && (
                            <div className="assets-sublist">

                                <div className="block asset-block">
                                    <input type="checkbox" />
                                    <div className="img-txt">
                                        <img src={handcuffs} alt="" />
                                        <span>Handcuffs</span>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Feeds</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Average speed</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Status</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Evacuation</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">ETA</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Cameras</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Traffic</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Surveillance</span>
                            </div>
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Shifts</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Shifts</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>

                        <div className="block">
                            <input type="checkbox" />
                            <div className="filter-txt">
                                <span className="txt-1">Shifts</span>
                            </div>
                            <img src={filter} alt="" />
                        </div>
                </div>
           </div>
    )
}
  
export default MapOverlay