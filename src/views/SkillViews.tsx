import "animate.css";
import { FontEnd, BackEnd, Database, Other } from "../components/Skill/Fontend";
import {
  HexaSkill,
  SkillTools,
  HardSkills,
  SoftSkills,
} from "../components/Skill/ArtistTool";
import "../styles/SkillSCSS/SkillView.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/store";
import { useState } from "react";

const SkillView = () => {
  //Làm hover
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  const activeSite = useSelector((state: RootState) => state.tabActive.nameTab);
  console.log(">>", activeSite);

  return (
    <>
      {activeSite === "developer" && (
        <div
          className={`fixed top-1/5 left-1/7 flex flex-col gap-10 max-h-[65vh] w-6xl overflow-auto custom-scroll animate__animated animate__fadeIn`}
        >
          <FontEnd />
          <BackEnd />
          <Database />
          <Other />
        </div>
      )}

      {activeSite === "artist" && (
        <>
          <div className={`fixed top-1/8 left-[13.5cm] `}>
            <SkillTools isHovered={hoverTarget === "tool"} />
          </div>
          <div className="fixed top-[7.5cm] left-3/7 ">
            <HexaSkill setHoverTarget={setHoverTarget} />
          </div>
          <div className="fixed top-[15cm] left-[3cm] ">
            <HardSkills isHovered={hoverTarget === "hard"} />
          </div>
          <div className="fixed top-[15cm] right-[3cm] ">
            <SoftSkills isHovered={hoverTarget === "soft"} />
          </div>
        </>
      )}
    </>
  );
};

export default SkillView;
