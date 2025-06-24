import background from "../../assets/Images/Background and Logo/warrior.png";
import "../../styles/GeneralSCSS/Background.scss";
const BackGroud = () => {
  return (
    <>
      <div className="Img-background-portfolio">
        <img className="background-img" src={background}></img>
      </div>
    </>
  );
};

export default BackGroud;
