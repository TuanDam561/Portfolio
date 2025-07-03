import csp from "../../assets/Images/LogoTool/CSP.png";
import medibang from "../../assets/Images/LogoTool/Medibang.png";
import hexaGon from "../../assets/Images/SupportImg/hexa.png";
import "../../styles/SkillSCSS/SkillArtist.scss";
import "animate.css";

import type { Dispatch, SetStateAction } from "react";
type HexaSkillProps = {
  setHoverTarget: Dispatch<SetStateAction<string | null>>;
};
type SkillProps = {
  isHovered: boolean;
};

const skillArtist = [
  { name: "Clip Studio Paint", img: csp },
  { name: "Medibang Paint", img: medibang },
];
// const hardSkills = [
//   { name: "Clip Studio Paint", img: csp },
//   { name: "Medibang", img: medibang },
// ];

export const HexaSkill = ({ setHoverTarget }: HexaSkillProps) => {
  return (
    <div className="hexa-container">
      <div
        className="hexa-1"
        onMouseEnter={() => setHoverTarget("tool")}
        onMouseLeave={() => setHoverTarget(null)}
      >
        <img src={hexaGon}></img>
        <p>Tool Skills</p>
      </div>
      <div
        className="hexa-2"
        onMouseEnter={() => setHoverTarget("hard")}
        onMouseLeave={() => setHoverTarget(null)}
      >
        <img src={hexaGon}></img>
        <p>Hard Skills</p>
      </div>
      <div
        className="hexa-3"
        onMouseEnter={() => setHoverTarget("soft")}
        onMouseLeave={() => setHoverTarget(null)}
      >
        <img src={hexaGon}></img>
        <p>Soft Skills</p>
      </div>
    </div>
  );
};

export const SkillTools = ({ isHovered }: SkillProps) => {
  return (
    <>
      <div className={`fontend-wapper-tools ${isHovered ? "hovered" : ""}`}>
        <div className="fontend-logo-container h-8 animate__animated animate__fadeInUp">
          {skillArtist.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.img}
                  alt={`logo-${index}`}
                  className="logo-item"
                />
                <p key={index} className="name-skill">
                  {item.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const HardSkills = ({ isHovered }: SkillProps) => {
  return (
    <>
      <div className={`fontend-wapper-tools ${isHovered ? "hovered" : ""}`}>
        <div className="fontend-logo-container h-8 animate__animated animate__fadeInUp">
          {skillArtist.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.img}
                  alt={`logo-${index}`}
                  className="logo-item"
                />
                <p key={index} className="name-skill">
                  {item.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const SoftSkills = ({ isHovered }: SkillProps) => {
  return (
    <>
      <div className={`fontend-wapper-tools ${isHovered ? "hovered" : ""}`}>
        <div className="fontend-logo-container h-8 animate__animated animate__fadeInUp">
          {skillArtist.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.img}
                  alt={`logo-${index}`}
                  className="logo-item"
                />
                <p key={index} className="name-skill">
                  {item.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
