import { VerticalTab } from "../components/Skill/SkillTab";
import "animate.css";

const SkillView = () => {
  return (
    <>
      <div className="absolute top-1/2 left-10 -translate-y-1/2  animate__animated animate__fadeInLeft">
        <VerticalTab />
      </div>
    </>
  );
};

export default SkillView;
