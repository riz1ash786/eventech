import React from "react";
import {
  BsArrowRightShort,
  BsInstagram,
  BsArrowLeftShort,
} from "react-icons/bs";
import arrow from "../../assets/arrow.png";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";
import event4 from "../../assets/event4.png";
import "./Slides.css";

const Slides = () => {
  const scrollingRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollingRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="custom-event custom-flex-center">
      <div className="custom-event-content">
        <div style={{ marginBottom: "1.5rem" }}>
          <p className="subtitle">Instagram</p>
          <img src={arrow} alt="arrow" className="arrow-img" />
        </div>

        <h1 className="desc-text">Photo event</h1>
        <p
          className="small-parag"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Some photos from our the latest Events
        </p>
        <button type="button" className="custom-btn">
          View More
        </button>
      </div>
      <div className="custom-event-img">
        <div className="custom-event-pic-container" ref={scrollingRef}>
           <div
                className="custom-event-pic-card custom-flex-center"
                key={`event-img-1`}
              >
                <img src={event1} alt="event-img" />
                <BsInstagram className="event-icon"/>
            </div>

            <div
                className="custom-event-pic-card custom-flex-center"
                key={`event-img-2`}
              >
                <img src={event2} alt="event-img" />
                <BsInstagram className="event-icon"/>
            </div>

            <div
                className="custom-event-pic-card custom-flex-center"
                key={`event-img-3`}
              >
                <img src={event3} alt="event-img" />
                <BsInstagram className="event-icon"/>
            </div>

            <div
                className="custom-event-pic-card custom-flex-center"
                key={`event-img-4`}
              >
                <img src={event4} alt="event-img" />
                <BsInstagram className="event-icon"/>
            </div>
        </div>

        {/* <div className="custom-event-pic-arrows">
        <BsArrowRightShort
            className="event-arrows"
            onClick={() => scroll("right")}
          />
          <BsArrowLeftShort
            className="event-arrows"
            onClick={() => scroll("left")}
          />
      
        </div> */}
      </div>
    </div>
  );
};

export default Slides;
