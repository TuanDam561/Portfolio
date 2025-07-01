import { useEffect, useRef, useState } from "react";
import backgroundMusic from "../../assets/Music/[SolarisSeasideStory] With the Tide, I  Remember You - Wuthering Waves.mp3";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores/store";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isOnMusic = useSelector((state: RootState) => state.modal.isOnMusic);

  // ✅ Cờ đánh dấu người dùng đã tương tác
  const [hasInteracted, setHasInteracted] = useState(false);

  // ✅ Lắng nghe sự kiện người dùng lần đầu
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true); // đánh dấu là đã tương tác
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // ✅ Phát / tắt nhạc theo redux và tương tác
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasInteracted) return;
    audio.volume = 0.4;

    if (isOnMusic) {
      audio.play().catch((err) => {
        console.warn("Không thể phát nhạc:", err);
      });
    } else {
      audio.pause();
    }
  }, [isOnMusic, hasInteracted]);

  return <audio ref={audioRef} src={backgroundMusic} loop />;
};

export default BackgroundMusic;
