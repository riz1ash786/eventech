import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../../utils/auth.js';
import { QUERY_SINGLE_EVENT} from '../../utils/queries';
import { useQuery } from '@apollo/client';
import "./SingleEvent.css";

const SingleEvent = () => {
    const { eventId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
        variables: { eventId: eventId },
      });
      const event = data?.event || {};
      
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
      }
      if (loading) {
        return <div>Loading...</div>;
      }
    return(
        <div className="custom-bg custom-wrap padding-section">
        <div className="img-wrap img-wrap-reverse">
          <img src={`/images/${event.image}`} alt="event_image" className="event-img"/>
        </div>
        <div className="info-wrap ">
        <div style={{ marginBottom: '1rem' }}>
             <h6>Eventech</h6>
              <img src="/images/arrow.png" alt="arrow_image" className="arrow-img" />
         </div>
          <h1 className="desc-text">{event.name}</h1>
    
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
            <button className="book"><a href={event.link}>Book Now</a></button>

          </div>
    
        </div>
      </div>
      
)
};
  
export default SingleEvent;
  
