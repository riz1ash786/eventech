import React from "react";
import { QUERY_ALL_LOCATIONS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Locations = () => {

    const { loading, data } = useQuery(QUERY_ALL_LOCATIONS);
      const locations = data?.locations || [];
  
      if (!locations.length) {
          return <h3>No Events Yet</h3>;
        }

  return (
    <section className="tags-section">
    <div className="tags-container">
    {loading ? (
              <>
              <div>Loading...</div>
              </>
            ) : (
              <>
      {locations&& 
        locations.map((onelocation)=> (
              <>
        <button className="tags">{onelocation.name}</button>
        </>
              ))}
              </>
              )}
    </div>
  </section>
  );
};

export default Locations;
