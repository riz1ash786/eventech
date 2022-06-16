import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_EVENTS_BYLOCATION } from "../../utils/queries";
import {  useParams} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io"
import "./ByLocation.css"
const ByLocation = () => {
//     const { location } = useParams();
//     console.log(location)
//     const { loading, data } = useQuery(QUERY_EVENTS_BYLOCATION, {
//        variables: { location: location},
//       });

//     const events = data?.eventsByLocation || [];
//     // if (!events.length) {
//     //     return <h3>No Events Yet</h3>;
//     //   }
// return(
    <div>
       <section className="tags-section-1">
            <div className="tags-container-1">
                 <Link to="/events">
                 <button className="tags-1" >
                 <IoMdArrowBack className="back-arrow"/>Go Back 
                </button>
                 </Link>
             </div>
         </section>
    <section>
   
        <div className="container project-container">
          {/* {loading ? (
              <>
              <div>Loading...</div>
              </>
             ) : (
                <>
            {events&& 
                events.map((oneevent)=> (
              
                    <div> {oneevent.title}</div>
                    ))}
                   </>
          )} */}


        <article className="project-item">
          <div className="project-item-img">
            <img src={`/images/berlin.jpg`} alt=""></img>
          </div>
        <h3>Title</h3>
        <h2>Location</h2>

        <div className="project-item-cta">
        <Link to="/events" className="btn-1"> Find out more</Link>  
        </div>
        </article> 


        <article className="project-item">
          <div className="project-item-img">
            <img src={`/images/berlin.jpg`} alt=""></img>
          </div>
        <h3>Title</h3>
        <h2>Location</h2>

        <div className="project-item-cta">
        <Link to="/events" className="btn-1"> Find out more</Link>  
        </div>
      
        </article> 
        </div>
    </section>
  </div>
)
}

export default ByLocation;