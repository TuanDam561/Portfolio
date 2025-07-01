import "../../styles/SkillSCSS/Vertical_Horizon_tab.scss";
import { setNameTab } from "../../stores/reducers/TabActive";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";

export const VerticalTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tabActive.nameTab);
  // const [activeTab, setActiveTab] = useState(tabName);

  const handleClick = (tabsKey: string) => {
    // setActiveTab(tabsKey);
    dispatch(setNameTab(tabsKey));
  };
  return (
    <div className="tab-vertical">
      <div
        className={`label ${activeTab === "developer" ? "active" : ""}`}
        onClick={() => handleClick("developer")}
      >
        Developer
      </div>

      <div className="vertical-line">
        <div
          className={`dot top ${activeTab === "developer" ? "filled" : ""}`}
          onClick={() => handleClick("developer")}
        />
        <div className="line" />
        <div
          className={`dot bottom ${activeTab === "artist" ? "filled" : ""}`}
          onClick={() => handleClick("artist")}
        />
      </div>

      <div
        className={`label ${activeTab === "artist" ? "active" : ""}`}
        onClick={() => handleClick("artist")}
      >
        Artist
      </div>
    </div>
  );
};

// export const HorizonTab = () => {
//   // const [activeTab, setActiveTab] = useState("developer");
//   return (
//     <div className="horizon-tab-wrapper">
//       <div className="horizon-tab-label">Developer</div>
//       <div className="horizon-tab-line-container">
//         <div className="horizon-tab-dot top" />
//         <div className="horizon-tab-line" />
//         <div className="horizon-tab-dot bottom" />
//       </div>
//       <div className="horizon-tab-label">Artist</div>
//     </div>
//   );
// };

export const HorizonTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tabActive.nameTab);

  const handleClick = (tabKey: string) => {
    dispatch(setNameTab(tabKey));
  };

  return (
    <div className="horizon-tab-wrapper">
      <div
        className={`horizon-tab-label ${
          activeTab === "developer" ? "active" : ""
        }`}
        onClick={() => handleClick("developer")}
      >
        Developer
      </div>

      <div className="horizon-tab-line-container">
        <div
          className={`horizon-tab-dot left ${
            activeTab === "developer" ? "filled" : ""
          }`}
          onClick={() => handleClick("developer")}
        />
        <div className="horizon-tab-line" />
        <div
          className={`horizon-tab-dot right ${
            activeTab === "artist" ? "filled" : ""
          }`}
          onClick={() => handleClick("artist")}
        />
      </div>

      <div
        className={`horizon-tab-label ${
          activeTab === "artist" ? "active" : ""
        }`}
        onClick={() => handleClick("artist")}
      >
        Artist
      </div>
    </div>
  );
};
