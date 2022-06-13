import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_EVENTS } from '../../utils/queries';
import Locations from "../../container/Locations/Locations.jsx"
import "./Events.css";

const Events = () => {
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
      
       <article className="project-item">
          <div className="project-item-img">
            <img src={`/images/${oneevent.image}`} alt={oneevent.name}></img>
          </div>
        <h3>{oneevent.name}</h3>
        <h2>{oneevent.location.name}</h2>

        <div className="project-item-cta">
        <a href="/" className="btn-1" target="_blank"> Find out more</a>        
        </div>
        </article> 
             </>
              ))}
              </>
              )}
               </div>
  </section>
  </div>

        //               {oneevent.name}
        //               {oneevent.description}
        //               {oneevent.whyattend}
        //               {oneevent.quantity}
        //               {oneevent.price}
        //               {oneevent.location.name}
        //               <img src={`/images/${oneevent.image}`}/>

      
)
};
  
export default Events;
  
