import React from "react";
import './maps.css';
import InformTable from "./InformationTable/InformTable";
import SelectDispatch from "./selectDispatch/SelectDispatch";
// import DragBox from "./DragBox/DragBox";
import LawOfficer from "./LawOfficerPopup/LawOfficer";
// import MapOverlay from "./mapOverlays/MapOverlay";

const Maps = () => {

    return (
        <div className="dragFR">
            <div className="dispatcherCard">
                <InformTable />
                <SelectDispatch />
                {/* <DragBox /> */}
                <LawOfficer />
            </div>
       </div>

      //   <div className="dragFR">
      //     <MapOverlay />
      //  </div>
    )
}
  
export default Maps