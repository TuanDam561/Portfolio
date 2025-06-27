import "../styles/GeneralSCSS/turnMusic.scss";
import { useDispatch, useSelector } from "react-redux";
import { turnOffMusic } from "../stores/reducers/ModalAction";
import type { RootState } from "../stores/store";

export const OffOnMusic = () => {
  const dispatch = useDispatch();

  // ✅ Lấy trạng thái bật/tắt nhạc từ Redux
  const isOnMusic = useSelector((state: RootState) => state.modal.isOnMusic);

  const handleTurnMusic = () => {
    dispatch(turnOffMusic());
  };

  return (
    <div className="cycle" onClick={handleTurnMusic}>
      <div className={`dot1 ${isOnMusic ? "playing" : ""}`}></div>
      <div className={`dot2 ${isOnMusic ? "playing" : ""}`}></div>
      <div className={`dot3 ${isOnMusic ? "playing" : ""}`}></div>
    </div>
  );
};
