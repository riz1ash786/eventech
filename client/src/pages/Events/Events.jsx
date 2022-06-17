import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_EVENTS } from '../../utils/queries';
import Locations from "../../container/Locations/Locations.jsx"
import "./Events.css";
import { Link } from 'react-router-dom';

const Events = () => {
  // Query to get all events from seeds
    const { loading, data } = useQuery(QUERY_ALL_EVENTS);
    const events = data?.events || [];
    if (!events.length) {
        return <h3>No Events Yet</h3>;
      }

    return(
<div>
    <Locations/>
<section>

<div className="container project-container">
      {loading ? (
              <>
              <div>Loading...</div>
              </>
            ) : (
              <>
      {events&& 
        events.map((oneevent)=> (
              <>
       <article className="project-item" key={oneevent._id}>
          <div className="project-item-img">
            <img src={`/images/${oneevent.image}`} alt={oneevent.title}></img>
          </div>
        <h3>{oneevent.title}</h3>
        <h2>{oneevent.location.name}</h2>

        <div className="project-item-cta">
        <Link to={`/events/${oneevent._id}`} className="btn-1"> Find out more </Link>  
        </div>
      
        </article> 
             </>
              ))}
              </>
              )}
               </div>
  </section>
  </div>
      
)
};
  
export default Events;
  
