import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  const tabs = ["Home", "Skill", "Project", "About Me", "Contact me"];
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4  text-white">
      {/* Logo bên trái */}
      <div className="logo">
        <img className="w-10 h-10" src="/logo.png" alt="Logo" />
      </div>

      {/* Tabs ở giữa */}
      <div className="flex space-x-8 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative pb-2  !outline-none !font-bold 
              !focus:outline-none transition-transform duration-500 ease-in-out
              ${active === tab ? "" : "hover:scale-110 hover:bg-[#5cb072] "} `}
          >
            {tab}
            {active === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white"></span>
            )}
          </button>
        ))}
      </div>

      {/* Icon bên phải */}
      <FiSettings
        size={24}
        className="transition-transform duration-300 hover:rotate-180 cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
