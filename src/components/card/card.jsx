import React from "react";
import './card.css'

const Card = (props) => {
    const cardStyle = {
        width: "100%",   
    }

    return ( 
        <React.Fragment>
            <div >
    <div className="w3-card-4 w3-dark-grey " >

    <div className="w3-container w3-center col-4">
      <h3>Friend request</h3>
      
      <img src={props.image} alt={props.alt} style={cardStyle}/>
      <h5>{props.name}</h5>
      <div className="w3-session">
      <button className="w3-button w3-green">Accept</button>
      <button className="w3-button w3-red">Decline</button>
      </div>
      
    </div>
    
    </div>
    
    </div>
    
    </React.Fragment>);
}
 
export default Card;