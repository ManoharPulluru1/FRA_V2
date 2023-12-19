import React, { useState } from "react";
import Logo from "./images/logo.svg";
import Light from "./images/incidents.svg";
import Overlays from "./images/overlays.svg";
import Cctv from "./images/cctv.svg";
import Chat from "./images/chat.svg";
import Cms from "./images/cms.svg";
import Aigs from "./images/aigs.svg";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = ({showMessageBoard, hideMessageBoard}) => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  return (
    <div className="sideBar">
      <img className="logoSideBar" alt="logoSide" src={Logo} />
      <Link to="/maps" style={{ textDecoration: 'none', display: 'contents' }}>
        <div
          className={`overlaysForLogos ${
            selectedLogo === "overlays" ? "selected" : ""
          }`}
          onClick={() => {handleLogoClick("overlays");hideMessageBoard()}}
        >
          <img className="sideLogos" alt="overlays" src={Overlays} />
        </div>
      </Link>
      <Link to="incidents" style={{ textDecoration: 'none', display: 'contents' }}>
      <div
        className={`incidentLogo ${
          selectedLogo === "incident" ? "selected" : ""
        }`}
        onClick={() => {handleLogoClick("incident");hideMessageBoard()}}
      >
          <img className="sideLogos" alt="incident" src={Light} />
      </div>
        </Link>
        <Link to="cameras" style={{ textDecoration: 'none', display: 'contents' }}>
      <div
        className={`camerasLogo ${
          selectedLogo === "cameras" ? "selected" : ""
        }`}
        onClick={() =>{ handleLogoClick("cameras");hideMessageBoard()}}
      >
        <img className="sideLogos" alt="cameras" src={Cctv} />
      </div>
      </Link>
      <Link to="communication" style={{ textDecoration: 'none', display: 'contents' }}>
      <div
        className={`comunicationLogo ${
          selectedLogo === "comunication" ? "selected" : ""
        }`}
        onClick={() => {handleLogoClick("comunication");showMessageBoard()}}
      >
        <img className="sideLogos" alt="comunication" src={Chat} />
      </div>
      </Link>
      <Link to="cms" style={{ textDecoration: 'none', display: 'contents' }}>
      <div
        className={`cmsLogo ${selectedLogo === "cms" ? "selected" : ""}`}
        onClick={() => {handleLogoClick("cms");hideMessageBoard()}}
      >
        <img className="sideLogos" alt="cms" src={Cms} />
      </div>
      </Link>
      <img className="sideMainLogos" alt="aigs" src={Aigs} />
      <div className="logoTxtSide">When seconds matter</div>
    </div>
  );
};

export default SideBar;
