import { useState } from "react";
import "../../styles/SkillSCSS/Vertical_Horizon_tab.scss";

export const VerticalTab = () => {
  const [activeTab, setActiveTab] = useState("developer");
  return (
    <div className="tab-vertical">
      <div
        className={`label ${activeTab === "developer" ? "active" : ""}`}
        onClick={() => setActiveTab("developer")}
      >
        Developer
      </div>

      <div className="vertical-line">
        <div
          className={`dot top ${activeTab === "developer" ? "filled" : ""}`}
        />
        <div className="line" />
        <div
          className={`dot bottom ${activeTab === "artist" ? "filled" : ""}`}
        />
      </div>

      <div
        className={`label ${activeTab === "artist" ? "active" : ""}`}
        onClick={() => setActiveTab("artist")}
      >
        Artist
      </div>
    </div>
  );
};

export const HorizonTab = () => {
  // const [activeTab, setActiveTab] = useState("developer");
  return (
    <div className="horizon-tab-wrapper">
      <div className="horizon-tab-label">Developer</div>
      <div className="horizon-tab-line-container">
        <div className="horizon-tab-dot top" />
        <div className="horizon-tab-line" />
        <div className="horizon-tab-dot bottom" />
      </div>
      <div className="horizon-tab-label">Artist</div>
    </div>
  );
};
