import React, { useEffect } from "react";
import "./Interested.css";
import "../Events/Events.css";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_SAVED_EVENTS } from "../../utils/queries";
import { DELETE_SAVED } from "../../utils/mutations";

import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const Interested = () => {
  const { data, loading: savedEventsLoading } = useQuery(QUERY_SAVED_EVENTS, {
    // If updating the cache doesn't work - this is why
    fetchPolicy: "network-only",
  });

  const [deleteSaved, { loading: deleteSavedLoading }] = useMutation(
    DELETE_SAVED,
    {
      update: (cache, { data }) => {
        const existing = cache.readQuery({ query: QUERY_SAVED_EVENTS });

        cache.writeQuery({
          query: QUERY_SAVED_EVENTS,
          data: {
            ...existing,
            me: {
              ...existing.me,
              savedEvents: [...data.deleteSaved.savedEvents],
              savedCount: data.savedCount,
            },
          },
        });
      },
    }
  );

  const handleDeleteSaved = async (eventId) => {
    try {
      var response = await deleteSaved({
        variables: {
          eventId,
        },
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      console.log(JSON.stringify(response, null, 2));
    }
  };

  const loading = savedEventsLoading || deleteSavedLoading;
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
      <>
        <h1 className="custom-int-h1">
          {" "}
          You have {data.me.savedCount} Events Saved
        </h1>
      </>
      <section>
        <div className="container project-container">
          {data.me.savedEvents.map((savedEvent, i) => (
            <article className="project-item" key={`${savedEvent._id}-${i}`}>
              <div className="project-item-img">
                <img
                  src={`/images/${savedEvent.image}`}
                  alt={savedEvent.title}
                ></img>
              </div>
              <h3>{savedEvent.title}</h3>
              <p className="saved-description">{savedEvent.description}</p>
              <div className="project-item-cta">
                <Link to={`/events/${savedEvent._id}`} className="btn-1">
                  {" "}
                  Find out more{" "}
                </Link>
                <a href={savedEvent.link} className="btn-1">
                  {" "}
                  Book Now{" "}
                </a>
              </div>

              <div className="bin">
                <button
                  onClick={() => handleDeleteSaved(savedEvent._id)}
                  data-event-id={savedEvent._id}
                >
                  <MdDeleteOutline fontSize={40} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Interested;
