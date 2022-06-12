import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_EVENTS } from '../utils/queries';

const Events = () => {
    const { loading, data } = useQuery(QUERY_ALL_EVENTS);
    const events = data?.events || [];

    if (!events.length) {
        return <h3>No Events Yet</h3>;
      }

//     return(
     
//         <div>
//           <div>
//             {loading ? (
//               <div>Loading...</div>
//             ) : (
//               <>
//               {events&& 
//               events.map((oneevent)=> (
//                   <>
//                   <div>
//                       {oneevent.name}
//                       {oneevent.description}
//                       {oneevent.whyattend}
//                       {oneevent.quantity}
//                       {oneevent.price}
//                       {oneevent.location.name}
//                       <img src={`/images/${oneevent.image}`}/>
                     
//                       </div>
//                   </>
//               ))}
//               </>
                 
//             )}
//           </div>
//         </div>
 
// )
// };
  
// export default Events;
  
