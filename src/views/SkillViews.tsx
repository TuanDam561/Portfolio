import "animate.css";
import { FontEnd, BackEnd, Database, Other } from "../components/Skill/Fontend";
// import { SkillTools } from "../components/Skill/ArtistTool";
import "../styles/SkillSCSS/SkillView.scss";
const SkillView = () => {
  return (
    <>
      <div className="fixed top-20 left-1/7 flex flex-col gap-10 max-h-[80vh] w-6xl overflow-auto custom-scroll">
        <FontEnd />
        <BackEnd />
        <Database />
        <Other />
      </div>
      {/* <div className="fixed top-20 left-1/7 flex flex-col gap-10 max-h-[80vh] w-6xl overflow-auto custom-scroll">
        <SkillTools />
      </div> */}
    </>
  );
};

export default SkillView;
