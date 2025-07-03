import "../../styles/Modal/SettingModal.scss";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../stores/reducers/ModalAction";
const SettingModal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const settingIcon = document.getElementById("settings-icon");
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !settingIcon?.contains(event.target as Node)
      ) {
        dispatch(closeModal());
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [dispatch]);
  return (
    <>
      <div ref={modalRef} className="setting-wapper">
        <div className="change-langaue">Change Language</div>
        <div className="change-option-portfolio">Change Portfolio</div>
        <div className="chang-music">Change Music</div>
        <div className="chat-with-admin">Chat with Admin</div>
        <div className="Sign-In ">Sign In</div>
      </div>
    </>
  );
};
export default SettingModal;
