import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_EVENTS_BYLOCATION } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import "./ByLocation.css";

const ByLocation = () => {
  const { locationId } = useParams();
  // filter events by location using QUERY_EVENTS_BYLOCATION
  const { loading, data } = useQuery(QUERY_EVENTS_BYLOCATION, {
    variables: { location: locationId },
  });

  const events = data?.eventsByLocation || [];

  return (
    <div>
      <section className="tags-section-1">
        <div className="tags-container-1">
          <Link to="/events">
            <button className="tags-1">
              <IoMdArrowBack className="back-arrow" />
              Go Back
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="container project-container">
          {loading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            <>
              {events && events.map((oneevent) => 

          <article className="project-item">
            <div className="project-item-img">
            <img src={`/images/${oneevent.image}`} alt={oneevent.title}></img>
            </div>
            <h3>{oneevent.title}</h3>
            <h2>{oneevent.location.name}</h2>

            <div className="project-item-cta">
              <Link to={`/events/${oneevent._id}`} className="btn-1">
                {" "}
                Find out more
              </Link>
            </div>
          </article>

          )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ByLocation;
