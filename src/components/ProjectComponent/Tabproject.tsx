import { useState } from "react";
import "../../styles/ProjectSCSS/TabProject.scss";
const numberProject = [
  { label: "Project 1", nameProject: "pj1" },
  { label: "Project 2", nameProject: "pj2" },
  { label: "Project 3", nameProject: "pj3" },
];

const Tabbar = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container-tab">
      <div className="horizon-tab">
        {numberProject.map((item, index) => (
          <div key={item.nameProject} className="step-container">
            <div className="circle-label">
              <div
                className={`circle ${index === activeStep ? "active" : ""}`}
                onClick={() => setActiveStep(index)}
              ></div>
              <span
                className={`label-project ${
                  index === activeStep ? "active" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                {item.label}
              </span>
            </div>
            {index !== numberProject.length - 1 && (
              <div className={`line ${index < activeStep ? "active" : ""}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
