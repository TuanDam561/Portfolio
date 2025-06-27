// import background from "../../assets/Images/Background and Logo/warrior.png";
import "../../styles/GeneralSCSS/Background.scss";
import animationBG from "../../assets/Animation/Animation-vmake.mp4";
const BackGroud = () => {
  return (
    <>
      <div className="Img-background-portfolio">
        {/* <img className="background-img" src={background}></img> */}
        <video
          className="background-img"
          src={animationBG}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </>
  );
};

export default BackGroud;
