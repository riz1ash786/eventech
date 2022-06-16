import React, { useEffect } from "react";
import { useState, useParams, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth.js";
import { QUERY_SINGLE_EVENT } from "../../utils/queries";
import { SAVE_EVENT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import "./SingleEvent.css";
import {BsFillChatDotsFill} from "react-icons/bs"
const SingleEvent = () => {
  const { eventId } = useParams();
  const { loading: getEventsLoading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { eventId: eventId },
  });
  const [saveEvent, { loading: saveEventLoading }] = useMutation(SAVE_EVENT);
  const navigate = useNavigate();

  const event = data?.event || {};
  const loading = getEventsLoading || saveEventLoading;

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/login");
    }
  }, []);

  const handleSaveEvent = async () => {
    // debugger;
    saveEvent({
      variables: {
        eventId,
      },
    });
    window.location.reload(true);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="custom-bg custom-wrap padding-section">
        <div className="img-wrap img-wrap-reverse">
          <img
            src={`/images/${event.image}`}
            alt="event_image"
            className="event-img"
          />
        </div>
        <div className="info-wrap ">
          <div style={{ marginBottom: "1rem" }}>
            <h6>Eventech</h6>
            <img
              src="/images/arrow.png"
              alt="arrow_image"
              className="arrow-img"
            />
          </div>
          <h1 className="desc-text">{event.title}</h1>

          <div className="event-content">
            <div className="event-content_quote">
              <img src="/images/T.png" alt="T_image" />
              <p className="titles">{event.description}</p>
            </div>
            <h6 className="whyattend">Why Attend</h6>
            <p className="titles"> {event.whyattend} </p>
            <h6>Ticket Price </h6>
            <p className="titles"> £{event.price}/ Ticket </p>
            <h6>Location </h6>
            <p className="titles"> {event.location.name} </p>
            <button className="book">
              <a href={event.link}>Book Now</a>
            </button>

            <button className="book" onClick={handleSaveEvent}>
              <Link to="/events">Save & See More</Link>
            </button>

            <div className="interactions">
              <button>
                {" "}
                <BiLike /> {event.likeCount}- people interested{" "}
              </button>
              <button>
                {" "}
                <FaRegComments /> {event.commentCount} - join discussion below{" "}
              </button>
            </div>

 
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-100 mb-100">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">Latest Comments</h4>
            </div>
            <div className="comment-widgets">

        {event.comments.map((comments)=> (

              <div className="d-flex flex-row comment-row">
                <div className="p-2"></div>
                <div className="comment-text active w-100">
                  <h6 className="font-medium"><BsFillChatDotsFill className="chat-icon"/> {comments.name}</h6>{" "}
                  <span className="m-b-15 d-block">
                  {comments.body}{" "}
                  </span>
                  <div className="comment-footer">
                    {" "}
                    <span className="text-muted float-right">
                    {comments.createdAt}
                    </span>{" "}

                  </div>
                </div>
              </div>
))}

            </div>

         <div className="container">
            <form>
                <div className="form-group">
                      <textarea className="form-control status-box" rows="3" placeholder="Enter your comment here..."></textarea>
               </div>
                <button href="#" className="btn btn-primary post-btn">Post Comment</button>

            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
