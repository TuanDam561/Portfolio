import csp from "../../assets/Images/LogoTool/CSP.png";
import medibang from "../../assets/Images/LogoTool/Medibang.png";
// import pts from "../../assets/Images/LogoTool/photoshop.png";
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
  // { name: "Adobe Photoshop", img: pts },
];
const hardSkills = [
  { id: 1, skillName: "Digital Painting " },
  { id: 2, skillName: "Traditional Drawing" },
  { id: 3, skillName: "Character Design" },
  { id: 4, skillName: "Illustration" },
  { id: 5, skillName: "UI Design" },
];
const softSkills = [
  { id: 1, skillName: "Teamwork" },
  { id: 2, skillName: "Communication" },
  { id: 3, skillName: "Problem-solving" },
  { id: 4, skillName: "Creativity" },
  { id: 5, skillName: "Adaptability " },
];

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
      <div className={`hard-skill-wapper-tools ${isHovered ? "hovered" : ""}`}>
        <div className="container h-8 animate__animated animate__fadeInUp">
          {hardSkills.map((item, index) => (
            <>
              <div className="name-and-logo">
                <p key={index} className="name-skill">
                  {item.skillName}
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
      <div className={`hard-skill-wapper-tools ${isHovered ? "hovered" : ""}`}>
        <div className="container h-8 animate__animated animate__fadeInUp">
          {softSkills.map((item, index) => (
            <>
              <div className="name-and-logo">
                <p key={index} className="name-skill">
                  {item.skillName}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

// export const SoftSkills = ({ isHovered }: SkillProps) => {
//   return (
//     <>
//       <div className={`fontend-wapper-tools ${isHovered ? "hovered" : ""}`}>
//         <div className="fontend-logo-container h-8 animate__animated animate__fadeInUp">
//           {skillArtist.map((item, index) => (
//             <>
//               <div className="name-and-logo">
//                 <img
//                   key={index}
//                   src={item.img}
//                   alt={`logo-${index}`}
//                   className="logo-item"
//                 />
//                 <p key={index} className="name-skill">
//                   {item.name}
//                 </p>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
