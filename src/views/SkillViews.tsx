import "animate.css";
import { FontEnd, BackEnd, Database, Other } from "../components/Skill/Fontend";
import "../styles/SkillSCSS/SkillView.scss";
const SkillView = () => {
  return (
    <>
      {/* <div className="fixed left-1/4">
        <div className="fixed top-1/7 left-1/4">
          <FontEnd />
        </div>
        <div className="fixed top-2/7 left-1/4">
          <BackEnd />
        </div>
        <div className="fixed top-3/7 left-1/4">
          <Database />
        </div>
        <div className="fixed top-4/7 left-1/4">
          <Other />
        </div>
      </div> */}
      <div className="fixed top-20 left-1/7 flex flex-col gap-10 max-h-[80vh] w-6xl overflow-auto custom-scroll">
        <FontEnd />
        <BackEnd />
        <Database />
        <Other />
      </div>
    </>
  );
};

export default SkillView;
