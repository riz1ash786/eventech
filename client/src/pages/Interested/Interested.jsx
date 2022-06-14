import React, { useEffect } from "react";
import "./Interested.css";
import conference from "../../assets/saved.png";
import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { QUERY_SAVED_EVENTS } from "../../utils/queries";

const Interested = () => {
  const { data, loading } = useQuery(QUERY_SAVED_EVENTS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log("The component mounted");

    return () => {
      console.log("the compoment unmounted");
    };
  }, []);

  return loading ? (
    <div>...Loading</div>
  ) : (
    <>
      <div>
        <h1 className="custom-int-h1"> Your Favorite Events</h1>
      </div>

      <div className="custom-header custom-wrap padding-section" id="home">
        <div className="info-wrap">
          <section className="saved-section">
            <div className="container int-container">
              {data.me.savedEvents.map((savedEvent, i) => (
                <article className="saved-event" key={`${savedEvent._id}-${i}`}>
                  <h3>{savedEvent.title}</h3>
                  <h2>{savedEvent.location.name}</h2>
                  <h2>23/07/22</h2>
                  <div className="heart-2">
                    <AiOutlineHeart fontSize={50} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="img-wrap">
          <img src={conference} alt="header_img" />
        </div>
      </div>
    </>
  );
};
export default Interested;
