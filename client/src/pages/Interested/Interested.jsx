import React from 'react';
import "./Interested.css";
import conference from "../../assets/saved.png";
import {AiOutlineHeart} from 'react-icons/ai';

const Interested = () => {

    return(
        <>

<div>
  <h1 className="custom-int-h1"> Your Favorite Events</h1>
</div>

<div className="custom-header custom-wrap padding-section" id="home">
    <div className="info-wrap">

    <section className="saved-section"> 
 <div className="container int-container">
    <article className="saved-event">  
      <h3>Event1</h3>
      <h2>EUROPE</h2>
      <h2>23/07/22</h2>
      <div className="heart-2"> 
        <AiOutlineHeart
          fontSize={50}
        />
        </div>
      </article> 

      <article className="saved-event">  
      <h3>Event1</h3>
      <h2>EUROPE</h2>
      <h2>23/07/22</h2>
      <div className="heart-2"> 
        <AiOutlineHeart
          fontSize={50}
        />
        </div>
      </article> 

      <article className="saved-event">  
      <h3>Event1</h3>
      <h2>EUROPE</h2>
      <h2>23/07/22</h2>
      <div className="heart-2"> 
        <AiOutlineHeart
          fontSize={50}
        />
        </div>
      </article> 

      <article className="saved-event">  
      <h3>Event1</h3>
      <h2>EUROPE</h2>
      <h2>23/07/22</h2>
      <div className="heart-2"> 
        <AiOutlineHeart
          fontSize={50}
        />
        </div>
      </article> 
      </div>
      </section>

    </div>

    <div className="img-wrap">
      <img src={conference} alt="header_img" />
    </div>
    
  </div>

      </>
    )

}
    export default Interested;