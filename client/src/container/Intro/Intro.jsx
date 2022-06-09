import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import video from "../../assets/video.mp4";
import "./Intro.css";

const Intro = () => {
  const [play, setPlay] = React.useState(false);
  const videoRef = React.useRef();

  return (
    <div className="custom-mp4">
      <video
        ref={videoRef}
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="custom-mp4-overlay custom-flex-center">
        <div
          className="custom-mp4-overlay-circle custom-flex-center"
          onClick={() => {
            setPlay(!play);
            if (play) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {play ? (
            <BsPauseFill color="#fff" fontSize={40} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={40} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
