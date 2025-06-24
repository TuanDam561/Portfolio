import Navbar from "../components/GeneralComponent/Tab";
import BackGroud from "../components/GeneralComponent/Background";
import TitleHome from "../components/HomeComponent/Hello";
import ImageDesign from "../components/HomeComponent/rightImgae";
import "animate.css";
const HomeView = () => {
  return (
    <>
      <Navbar />
      <TitleHome />
      <ImageDesign />

      {/* <div className="animate__animated animate__fadeInLeft relative top-[160px]">
        <TitleHome />
      </div>
      <div className="animate__animated  animate__fadeIn animate__delay-1s relative top-[160px] ">
        <ImageDesign />
      </div> */}

      <BackGroud />
    </>
  );
};
export default HomeView;
