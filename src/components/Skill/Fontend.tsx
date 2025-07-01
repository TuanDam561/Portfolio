import Html from "../../assets/Images/LogoTool/htlm.png";
import css from "../../assets/Images/LogoTool/css.png";
import js from "../../assets/Images/LogoTool/js.png";
import React from "../../assets/Images/LogoTool/React.png";
import sql from "../../assets/Images/LogoTool/SQLserver.png";
import postman from "../../assets/Images/LogoTool/Postman.png";
import mvc from "../../assets/Images/LogoTool/aspmvc.png";
import figma from "../../assets/Images/LogoTool/Figma.png";
import github from "../../assets/Images/LogoTool/GitHub.png";
import firebase from "../../assets/Images/LogoTool/Firebase.png";
import sass from "../../assets/Images/LogoTool/sass.png";
import trello from "../../assets/Images/LogoTool/Trello.png";

import "../../styles/SkillSCSS/SkillView.scss";
const logoSkillFontend = [
  { name: "React", logo: React },
  { name: "HTML", logo: Html },
  { name: "CSS", logo: css },
  { name: "Javascript", logo: js },
  { name: "SCSS", logo: sass },
];
const logoSkillBackend = [{ name: " ASP .Net MVC", logo: mvc }];
const logoSkillDatabase = [
  { name: "SQL Server", logo: sql },
  { name: "Firebase", logo: firebase },
];
const logoSkillOther = [
  { name: "GitHub", logo: github },
  { name: "Figma", logo: figma },
  { name: "PostMan", logo: postman },
  { name: "Trello", logo: trello },
];
export const FontEnd = () => {
  return (
    <>
      <div className="fontend-wapper">
        <p>FontEnd</p>
        <div className="fontend-logo-container">
          {logoSkillFontend.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.logo}
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

export const BackEnd = () => {
  return (
    <>
      <div className="fontend-wapper">
        <p>BackEnd</p>
        <div className="fontend-logo-container">
          {logoSkillBackend.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.logo}
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

export const Database = () => {
  return (
    <>
      <div className="fontend-wapper">
        <p>Database</p>
        <div className="fontend-logo-container">
          {logoSkillDatabase.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.logo}
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

export const Other = () => {
  return (
    <>
      <div className="fontend-wapper">
        <p>Other</p>
        <div className="fontend-logo-container">
          {logoSkillOther.map((item, index) => (
            <>
              <div className="name-and-logo">
                <img
                  key={index}
                  src={item.logo}
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
