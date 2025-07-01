import csp from "../../assets/Images/LogoTool/CSP.png";
import medibang from "../../assets/Images/LogoTool/Medibang.png";
import "../../styles/SkillSCSS/SkillView.scss";
const skillArtist = [
  { name: "Clip Studio Paint", img: csp },
  { name: "Medibang", img: medibang },
];

export const SkillTools = () => {
  return (
    <>
      <div className="fontend-wapper">
        <p>Skill Tools</p>
        <div className="fontend-logo-container">
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
