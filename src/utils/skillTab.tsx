import { VerticalTab } from "../components/Skill/SkillTab";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState } from "../stores/store";
import "animate.css";

const SkillTab = () => {
  const namePath = useSelector((state: RootState) => state.tabActive.namePath);

  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (!["Home", "Contact me"].includes(namePath)) {
      setShouldRender(true);
      setAnimationClass("animate__fadeInLeft");
    } else {
      setAnimationClass("animate__fadeOutLeft");
      setTimeout(() => setShouldRender(false), 800);
    }
  }, [namePath]);
  if (!shouldRender) return null;
  return (
    <>
      <div
        className={`absolute top-1/2 left-10 -translate-y-1/2  animate__animated ${animationClass}`}
      >
        <VerticalTab />
      </div>
    </>
  );
};

export default SkillTab;
