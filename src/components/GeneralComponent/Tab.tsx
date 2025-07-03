import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import logo from "../../assets/Images/Background and Logo/Logo 2.png";
import { OffOnMusic } from "../../utils/turnOffOnMusic";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../stores/reducers/ModalAction";
import type { RootState } from "../../stores/store";
import { setNamePath } from "../../stores/reducers/TabActive";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pathName = useSelector((state: RootState) => state.tabActive.namePath);
  const isOnMusic = useSelector((state: RootState) => state.modal.isOnMusic);

  const tabs = [
    { label: "Home", path: "/home" },
    { label: "Skill", path: "/skill" },
    { label: "Project", path: "/project" },
    { label: "About Me", path: "/about" },
    { label: "Contact me", path: "/contact" },
  ];

  const [active, setActive] = useState(pathName);

  // const openSettingModal = (event: React.MouseEvent) => {
  //   event.stopPropagation();
  //   dispatch(openModal());
  // };

  const handleClick = (tab: { label: string; path: string }) => {
    setActive(tab.label);
    navigate(tab.path);
    dispatch(setNamePath(tab.label));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 text-white">
      {/* Logo bên trái */}
      <div className="logo -translate-y-3">
        <img
          className={`w-[80px] h-[80px] object-contain  block mx-auto ${
            isOnMusic === true ? "animate-spin" : ""
          }`}
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Tabs ở giữa */}
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleClick(tab)}
            className={`relative pb-2 !outline-none !font-bold 
              !focus:outline-none transition-transform duration-500 ease-in-out
              ${
                active === tab.label
                  ? ""
                  : "hover:scale-110 hover:bg-[#5cb072] "
              } `}
          >
            {tab.label}
            {active === tab.label && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white"></span>
            )}
          </button>
        ))}
      </div>

      {/* Icon bên phải */}
      <div className="flex space-x-8 items-center">
        <OffOnMusic />
        <FiSettings
          id="settings-icon"
          size={24}
          className="transition-transform duration-300 hover:rotate-180 cursor-pointer"
          onClick={(e) => {
            dispatch(toggleModal());
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
